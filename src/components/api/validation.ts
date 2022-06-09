import { prop, trigger } from "./misc";
import { compare, handlePromise, lang } from "@skylib/facades";
import { a, cast, defineFn, is, typedef } from "@skylib/functions";
import { computed, ref } from "vue";
import type { SetupProps } from "./core";
import type { Writable, empty } from "@skylib/functions";
import type { QField, QInput, ValidationRule } from "quasar";
import type { Optional } from "ts-toolbelt/out/Object/Optional";
import type { ComputedRef, Ref } from "vue";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends useValidation.Word {}
    }
  }
}

export const useValidation = defineFn(
  /**
   * Use validation plugin.
   *
   * @param props - Props.
   * @param target - Target.
   * @param options - Options.
   * @returns Validation plugin.
   */
  <T = unknown>(
    props: SetupProps<useValidation.Props<T>>,
    target: ComputedRef<QField | QInput>,
    options: ComputedRef<useValidation.Options<T>>
  ): useValidation.Plugin<T> => {
    const contexts = new Map<symbol, useValidation.Context>();

    const label = computed(() =>
      is.not.empty(options.value.label) &&
      useValidation.lang.has(options.value.label)
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
            wrapRule((value: T): string | true => {
              const message =
                options.value.minErrorMessage ?? "FieldShouldBeGteMin";

              const minMaxFormat = options.value.minMaxFormat ?? cast.string;

              // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
              // fixme - Use getIfExists
              return is.not.empty(value) && compare(value, min) < 0
                ? useValidation.lang
                    .with("field", label.value)
                    .with("min", minMaxFormat(min))
                    .get(message)
                : true;
            }, "change")
          ]
        : [];
    });

    const rulesOnChangeMax = computed(() => {
      const max = options.value.max;

      return is.not.empty(max)
        ? [
            wrapRule((value: T): string | true => {
              const message =
                options.value.maxErrorMessage ?? "FieldShouldBeLteMax";

              const minMaxFormat = options.value.minMaxFormat ?? cast.string;

              // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
              // fixme - Use getIfExists
              return is.not.empty(value) && compare(value, max) > 0
                ? useValidation.lang
                    .with("field", label.value)
                    .with("max", minMaxFormat(max))
                    .get(message)
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
            wrapRule((value: T): string | true => {
              const message =
                options.value.requiredErrorMessage ?? "FieldIsRequired";

              // eslint-disable-next-line no-warning-comments -- Wait for @skylib/framework update
              // fixme - Use getIfExists
              return value === undefined
                ? useValidation.lang.with("field", label.value).get(message)
                : true;
            }, "submit")
          ]
        : []
    );

    useValidation.reset.watch(() => {
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
      validate: (value: T, context: useValidation.Context): void => {
        handlePromise.silent(async () => {
          const key = Symbol("validation-context");

          contexts.set(key, context);

          try {
            await target.value.validate(() => value);
          } finally {
            contexts.delete(key);
          }
        });
      }
    };

    interface RuleWrapper extends useValidation.Rule {
      readonly state: Ref<string | true>;
    }

    function wrapRule(
      rule: useValidation.Rule<T>,
      context: useValidation.Context
    ): RuleWrapper {
      const state = ref<string | true>(true);

      return defineFn(
        async (value: unknown) => {
          if (is.callable(value)) value = value();

          if (
            a.fromIterable(contexts.values()).includes(context) ||
            contexts.size === 0 ||
            state.value !== true
          )
            // eslint-disable-next-line require-atomic-updates -- Ok
            state.value = await rule(options.value.format(value));

          return state.value;
        },
        { state }
      );
    }
  },
  {
    lang: typedef<lang.Lang<keyof useValidation.Word, never>>(lang),
    props: {
      rulesOnChange: prop<useValidation.Props["rulesOnChange"]>(),
      rulesOnInput: prop<useValidation.Props["rulesOnInput"]>(),
      rulesOnSubmit: prop<useValidation.Props["rulesOnSubmit"]>()
    } as const,
    reset: trigger()
  }
);

export namespace useValidation {
  export type Context = "change" | "input" | "submit";

  export interface Options<T = unknown> {
    /**
     * Formats value for validation.
     *
     * @param value - Value.
     * @returns Formatted value.
     */
    readonly format: (value: unknown) => T;
    readonly label?: string;
    readonly max?: T;
    readonly maxErrorMessage?: lang.Transform<lang.Word>;
    readonly min?: T;
    readonly minErrorMessage?: lang.Transform<lang.Word>;
    /**
     * Formats min/max value.
     *
     * @param value - Value.
     * @returns Formatted value.l.
     */
    readonly minMaxFormat?: (value: Exclude<T, empty>) => string;
    // eslint-disable-next-line no-restricted-syntax -- Ok
    readonly required?: boolean;
    readonly requiredErrorMessage?: lang.Transform<lang.Word>;
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
  }

  export interface Props<T = unknown> extends OwnProps<T> {}

  export interface Rule<T = unknown> {
    /**
     * Validates value.
     *
     * @param value - Value.
     * @returns Validation result.
     */
    (value: T): Promise<string | true> | string | true;
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
