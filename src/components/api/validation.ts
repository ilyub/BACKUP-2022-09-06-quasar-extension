import { submitting as submittingInjection } from "./injections";
import { prop, trigger } from "./misc";
import { handlePromise, lang as baseLang } from "@skylib/facades";
import { as, defineFn, is, typedef } from "@skylib/functions";
import { computed, ref } from "vue";
import type { SetupProps } from "./core";
import type { Writable, booleanU, stringU } from "@skylib/functions";
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
   * @returns Validation plugin.
   */
  <T = unknown>(
    props: SetupProps<useValidation.Props<T>>,
    target: Ref<QField | QInput | undefined>,
    modelValue: () => T
  ): useValidation.Plugin<T> => {
    let changing = 0;

    const field = computed(() =>
      is.not.empty(props.label) && useValidation.lang.has(props.label)
        ? props.label
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

    const rulesOnSubmit = computed(() =>
      props.rulesOnSubmit
        ? props.rulesOnSubmit.map(rule => wrapRule(rule, "submit"))
        : []
    );

    const rulesRequired = computed(() =>
      props.required ?? false
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
        ...rulesOnChange.value,
        ...rulesRequired.value,
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
      label: prop<useValidation.Props["label"]>(),
      required: prop.boolean(),
      rulesOnChange: prop<useValidation.Props["rulesOnChange"]>(),
      rulesOnInput: prop<useValidation.Props["rulesOnInput"]>(),
      rulesOnSubmit: prop<useValidation.Props["rulesOnSubmit"]>()
    } as const,
    reset: trigger()
  }
);

export namespace useValidation {
  export interface OwnProps<T = unknown> {
    readonly label?: stringU;
    readonly required?: booleanU;
    readonly rulesOnChange?: Rules<T> | undefined;
    readonly rulesOnInput?: Rules<T> | undefined;
    readonly rulesOnSubmit?: Rules<T> | undefined;
  }

  export interface Plugin<T = unknown> {
    /**
     * Handles "change" event.
     */
    readonly change: () => void;
    readonly rules: ComputedRef<Writable<ValidationRules<T>>>;
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
    readonly Field: true;
    readonly FieldIsRequired: true;
  }
}

interface RuleWrapper<T = unknown> extends useValidation.Rule<T> {
  readonly prevInvalid: Ref<boolean>;
}
