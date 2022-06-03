import { submitting as submittingInjection } from "./injections";
import { prop, trigger } from "./misc";
import { compare, handlePromise, lang as baseLang } from "@skylib/facades";
import { as, cast, defineFn, is, typedef } from "@skylib/functions";
import { computed, ref } from "vue";
import type { SetupProps } from "./core";
import type { Writable, empty } from "@skylib/functions";
import type { QField, QInput, ValidationRule } from "quasar";
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
   * @param modelValue - Model value.
   * @param getOptions - Returns options.
   * @returns Validation plugin.
   */
  <T = unknown>(
    props: SetupProps<useValidation.Props<T>>,
    target: Ref<QField | QInput | undefined>,
    modelValue: () => T,
    getOptions?: () => useValidation.Options<T>
  ): useValidation.Plugin<T> => {
    let changing = 0;

    const field = computed(() =>
      is.not.empty(options.value.label) &&
      useValidation.lang.has(options.value.label)
        ? options.value.label
        : "field"
    );

    const options = computed(() => {
      return { ...props.validationOptions, ...getOptions?.() };
    });

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
            wrapRule(
              (value: T): string | true =>
                is.not.empty(value) && compare(value, min) < 0
                  ? useValidation.lang
                      .with("field", field.value)
                      .with(
                        "min",
                        options.value.minMaxFormat
                          ? options.value.minMaxFormat(min)
                          : cast.string(min)
                      ).FieldShouldBeGteMin
                  : true,
              "change"
            )
          ]
        : [];
    });

    const rulesOnChangeMax = computed(() => {
      const max = options.value.max;

      return is.not.empty(max)
        ? [
            wrapRule(
              (value: T): string | true =>
                is.not.empty(value) && compare(value, max) > 0
                  ? useValidation.lang
                      .with("field", field.value)
                      .with(
                        "max",
                        options.value.minMaxFormat
                          ? options.value.minMaxFormat(max)
                          : cast.string(max)
                      ).FieldShouldBeLteMax
                  : true,
              "change"
            )
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
            wrapRule(
              (value: T): string | true =>
                value === undefined
                  ? useValidation.lang.with("field", field.value)
                      .FieldIsRequired
                  : true,
              "submit"
            )
          ]
        : []
    );

    const submitting = submittingInjection.inject();

    useValidation.reset.watch(() => {
      for (const rule of [...rulesOnChange.value, ...rulesOnSubmit.value])
        rule.prevInvalid.value = false;
    });

    return {
      change: (): void => {
        handlePromise.silent(async () => {
          changing++;

          try {
            await as.not.empty(target.value).validate();
          } finally {
            changing--;
          }
        });
      },
      rules: computed(() => [
        ...rulesOnInput.value,
        ...rulesOnChangeMin.value,
        ...rulesOnChangeMax.value,
        ...rulesOnChange.value,
        ...rulesOnSubmitRequired.value,
        ...rulesOnSubmit.value
      ])
    };

    function wrapRule(
      rule: useValidation.Rule<T>,
      context: "change" | "input" | "submit"
    ): RuleWrapper<T> {
      const prevInvalid = ref(false);

      return defineFn(
        async () => {
          if (
            context === "input" ||
            (context === "change" && changing) ||
            submitting.value ||
            prevInvalid.value
          ) {
            const result = await rule(modelValue());

            // eslint-disable-next-line require-atomic-updates -- Ok
            prevInvalid.value = result !== true;

            return result;
          }

          return true;
        },
        { prevInvalid }
      );
    }
  },
  {
    lang: typedef<baseLang.Lang<keyof useValidation.Word, never>>(baseLang),
    props: {
      rulesOnChange: prop<useValidation.Props["rulesOnChange"]>(),
      rulesOnInput: prop<useValidation.Props["rulesOnInput"]>(),
      rulesOnSubmit: prop<useValidation.Props["rulesOnSubmit"]>(),
      validationOptions: prop<useValidation.Props["validationOptions"]>()
    } as const,
    reset: trigger()
  }
);

export namespace useValidation {
  export interface Options<T = unknown> {
    readonly label?: string;
    readonly max?: T;
    readonly min?: T;
    /**
     * Formats min/max value.
     *
     * @param value - Value.
     * @returns Formatted value.l.
     */
    readonly minMaxFormat?: (value: Exclude<T, empty>) => string;
    readonly required?: boolean;
  }

  export interface OwnProps<T = unknown> {
    readonly rulesOnChange?: Rules<T> | undefined;
    readonly rulesOnInput?: Rules<T> | undefined;
    readonly rulesOnSubmit?: Rules<T> | undefined;
    readonly validationOptions?: Options<T> | undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentProps {}

  export interface Plugin<T = unknown> {
    /**
     * Handles "change" event.
     */
    readonly change: () => void;
    readonly rules: ComputedRef<Writable<ValidationRules<T>>>;
  }

  export interface Props<T = unknown> extends ParentProps, OwnProps<T> {}

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

interface RuleWrapper<T = unknown> extends useValidation.Rule<T> {
  readonly prevInvalid: Ref<boolean>;
}
