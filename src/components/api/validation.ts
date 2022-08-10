import type { ComputedRef, Ref } from "vue";
import type {
  Options,
  OwnProps,
  Plugin,
  Props,
  Rule
} from "./validation.internal";
import type { QField, QInput } from "quasar";
import { a, cast, defineFn, evaluate, is } from "@skylib/functions";
import { compare, handlePromise, lang } from "@skylib/facades";
import { computed, ref } from "vue";
import { injectableTrigger, propFactory } from "./misc";
import { Context } from "./validation.internal";

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
    props: Props<T>,
    target: ComputedRef<QField | QInput>,
    options: ComputedRef<Options<T>>
  ): Plugin<T> => {
    // eslint-disable-next-line @skylib/functions/prefer-ReadonlyMap -- Ok
    const contexts = new Map<symbol, Context>();

    const label = computed(() =>
      is.not.empty(options.value.label) && lang.has(options.value.label)
        ? options.value.label
        : "field"
    );

    const rulesOnInput = computed(() =>
      props.rulesOnInput
        ? props.rulesOnInput.map(rule => wrapRule(rule, Context.input))
        : []
    );

    const rulesOnChange = computed(() =>
      props.rulesOnChange
        ? props.rulesOnChange.map(rule => wrapRule(rule, Context.change))
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
                    lang
                      .with("field", label.value)
                      .with("min", minMaxFormat(min))
                      .get(message)
                  )
                : true;
            }, Context.change)
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
                    lang
                      .with("field", label.value)
                      .with("max", minMaxFormat(max))
                      .get(message)
                  )
                : true;
            }, Context.change)
          ]
        : [];
    });

    const rulesOnSubmit = computed(() =>
      props.rulesOnSubmit
        ? props.rulesOnSubmit.map(rule => wrapRule(rule, Context.submit))
        : []
    );

    const rulesOnSubmitRequired = computed(() =>
      options.value.required ?? false
        ? [
            wrapRule(value => {
              const message =
                options.value.requiredErrorMessage ?? "FieldIsRequired";

              return value === undefined
                ? lang.plain(lang.with("field", label.value).get(message))
                : true;
            }, Context.submit)
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

    function validate(value: T, context: Context): void {
      handlePromise.silent(validateAsync(value, context));
    }

    async function validateAsync(value: T, context: Context): Promise<boolean> {
      const key = Symbol("validation-context");

      contexts.set(key, context);

      try {
        return await target.value.validate(() => value);
      } finally {
        contexts.delete(key);
      }
    }

    function wrapRule(rule: Rule<T>, context: Context): RuleWrapper {
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
    Context,
    lang,
    // eslint-disable-next-line @skylib/typescript/no-complex-return-type -- Ok
    props: evaluate(() => {
      const prop = propFactory<OwnProps>();

      return {
        rulesOnChange: prop("rulesOnChange"),
        rulesOnInput: prop("rulesOnInput"),
        rulesOnSubmit: prop("rulesOnSubmit")
      } as const;
    }),
    reset: injectableTrigger()
  }
);

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace validation {
  export type Context = import("./validation.internal").Context;

  // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
  export type Options<T = unknown> = import("./validation.internal").Options<T>;

  // eslint-disable-next-line @typescript-eslint/no-shadow -- Ok
  export type Props<T = unknown> = import("./validation.internal").Props<T>;

  export type Rules<T = unknown> = import("./validation.internal").Rules<T>;

  export type ValidationRules<T = unknown> =
    import("./validation.internal").ValidationRules<T>;
}
