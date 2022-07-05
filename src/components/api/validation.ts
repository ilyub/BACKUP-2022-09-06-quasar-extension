import { injectableTrigger, propFactory } from "./misc";
import { compare, handlePromise, lang } from "@skylib/facades";
import { a, cast, defineFn, evaluate, is, typedef } from "@skylib/functions";
import { computed, ref } from "vue";
import type { Writable, empty } from "@skylib/functions";
import type { QField, QInput, ValidationRule } from "quasar";
import type { Optional } from "ts-toolbelt/out/Object/Optional";
import type { ComputedRef, Ref } from "vue";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends validation.Word {}
    }
  }
}

export const validation = defineFn(
  /**
   * Use validation plugin.
   *
   * @param props - Props.
   * @param target - Target.
   * @param options - Options.
   * @returns Validation plugin.
   */
  <T = unknown>(
    props: validation.Props<T>,
    target: ComputedRef<QField | QInput>,
    options: ComputedRef<validation.Options<T>>
  ): validation.Plugin<T> => {
    const contexts = new Map<symbol, validation.Context>();

    const label = computed(() =>
      is.not.empty(options.value.label) &&
      validation.lang.has(options.value.label)
        ? options.value.label
        : "field"
    );

    const rulesOnInput = computed(() =>
      props.rulesOnInput
        ? props.rulesOnInput.map(rule => wrapRule(rule, "input"))
        : []
    );

    const rulesOnChange = computed(() =>
      props.rulesOnChange
        ? props.rulesOnChange.map(rule => wrapRule(rule, "change"))
        : []
    );

    const rulesOnChangeMin = computed(() => {
      const min = options.value.min;

      return is.not.empty(min)
        ? [
            wrapRule(value => {
              const message =
                options.value.minErrorMessage ?? "FieldShouldBeGteMin";

              const minMaxFormat = options.value.minMaxFormat ?? cast.string;

              return is.not.empty(value) && compare(value, min) < 0
                ? lang.plain(
                    validation.lang
                      .with("field", label.value)
                      .with("min", minMaxFormat(min))
                      .get(message)
                  )
                : true;
            }, "change")
          ]
        : [];
    });

    const rulesOnChangeMax = computed(() => {
      const max = options.value.max;

      return is.not.empty(max)
        ? [
            wrapRule(value => {
              const message =
                options.value.maxErrorMessage ?? "FieldShouldBeLteMax";

              const minMaxFormat = options.value.minMaxFormat ?? cast.string;

              return is.not.empty(value) && compare(value, max) > 0
                ? lang.plain(
                    validation.lang
                      .with("field", label.value)
                      .with("max", minMaxFormat(max))
                      .get(message)
                  )
                : true;
            }, "change")
          ]
        : [];
    });

    const rulesOnSubmit = computed(() =>
      props.rulesOnSubmit
        ? props.rulesOnSubmit.map(rule => wrapRule(rule, "submit"))
        : []
    );

    const rulesOnSubmitRequired = computed(() =>
      options.value.required ?? false
        ? [
            wrapRule(value => {
              const message =
                options.value.requiredErrorMessage ?? "FieldIsRequired";

              return value === undefined
                ? lang.plain(
                    validation.lang.with("field", label.value).get(message)
                  )
                : true;
            }, "submit")
          ]
        : []
    );

    validation.reset.watch(() => {
      for (const rule of [...rulesOnChange.value, ...rulesOnSubmit.value])
        rule.state.value = true;
    });

    return {
      rules: computed(() => [
        ...rulesOnInput.value,
        ...rulesOnChangeMin.value,
        ...rulesOnChangeMax.value,
        ...rulesOnChange.value,
        ...rulesOnSubmitRequired.value,
        ...rulesOnSubmit.value
      ]),
      validate,
      validateAsync
    };

    interface RuleWrapper {
      /**
       * Validates value.
       *
       * @param value - Value.
       * @returns Validation result.
       */
      (value: unknown): Promise<string | true> | string | true;
      readonly state: Ref<lang.Key | true>;
    }

    function validate(value: T, context: validation.Context): void {
      handlePromise.silent(validateAsync(value, context));
    }

    async function validateAsync(
      value: T,
      context: validation.Context
    ): Promise<boolean> {
      const key = Symbol("validation-context");

      contexts.set(key, context);

      try {
        return await target.value.validate(() => value);
      } finally {
        contexts.delete(key);
      }
    }

    function wrapRule(
      rule: validation.Rule<T>,
      context: validation.Context
    ): RuleWrapper {
      const state = ref<lang.Key | true>(true);

      return defineFn(
        async (value: unknown) => {
          if (is.callable(value)) value = value();

          if (
            a.fromIterable(contexts.values()).includes(context) ||
            contexts.size === 0 ||
            state.value !== true
          )
            // eslint-disable-next-line require-atomic-updates -- Postponed
            state.value = await rule(options.value.format(value));

          return state.value === true ? true : lang.get(state.value);
        },
        { state }
      );
    }
  },
  {
    lang: typedef<lang.Lang<keyof validation.Word, never>>(lang),
    props: evaluate(() => {
      const prop = propFactory<validation.OwnProps>();

      return {
        rulesOnChange: prop("rulesOnChange"),
        rulesOnInput: prop("rulesOnInput"),
        rulesOnSubmit: prop("rulesOnSubmit")
      } as const;
    }),
    reset: injectableTrigger()
  }
);

export namespace validation {
  export type Context = "change" | "input" | "submit";

  export interface Options<T = unknown> {
    /**
     * Formats value for validation.
     *
     * @param value - Value.
     * @returns Formatted value.
     */
    readonly format: (value: unknown) => T;
    readonly label?: lang.Key;
    readonly max?: T;
    readonly maxErrorMessage?: lang.Key;
    readonly min?: T;
    readonly minErrorMessage?: lang.Key;
    /**
     * Formats min/max value.
     *
     * @param value - Value.
     * @returns Formatted value.l.
     */
    readonly minMaxFormat?: (value: Exclude<T, empty>) => string;
    readonly required?: boolean;
    readonly requiredErrorMessage?: lang.Key;
  }

  export type OptionsProp<T = unknown> = Optional<Options<T>>;

  export interface OwnProps<T = unknown> {
    readonly rulesOnChange?: Rules<T> | undefined;
    readonly rulesOnInput?: Rules<T> | undefined;
    readonly rulesOnSubmit?: Rules<T> | undefined;
  }

  export interface Plugin<T = unknown> {
    readonly rules: ComputedRef<Writable<ValidationRules>>;
    /**
     * Validates field.
     *
     * @param value - Value.
     * @param context - Context.
     */
    readonly validate: (value: T, context: Context) => void;
    /**
     * Validates field.
     *
     * @param value - Value.
     * @param context - Context.
     * @returns Promise.
     */
    readonly validateAsync: (value: T, context: Context) => Promise<boolean>;
  }

  export interface Props<T = unknown> extends OwnProps<T> {}

  export interface Rule<T = unknown> {
    /**
     * Validates value.
     *
     * @param value - Value.
     * @returns Validation result.
     */
    (value: T): lang.Key | Promise<lang.Key | true> | true;
  }

  export type Rules<T = unknown> = ReadonlyArray<Rule<T>>;

  export type ValidationRules<T = unknown> = ReadonlyArray<ValidationRule<T>>;

  export interface Word {
    readonly Equal: true;
    readonly Field: true;
    readonly FieldIsRequired: true;
    readonly FieldShouldBeGteMin: true;
    readonly FieldShouldBeLteMax: true;
  }
}
