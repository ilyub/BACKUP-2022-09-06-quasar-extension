import { prop } from "./misc";
import { submitting as submittingInjection } from "./submitting";
import { handlePromise, lang as baseLang } from "@skylib/facades";
import { as, defineFn, fn, is, reflect, typedef } from "@skylib/functions";
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
   * @param modelValue - Model value.
   * @returns Validation plugin.
   */
  <T = unknown>(
    props: SetupProps<useValidation.Props<T>>,
    modelValue: () => T
  ): useValidation.Plugin<T> => {
    let change = 0;

    const field = computed(() =>
      is.not.empty(props.label) && useValidation.lang.has(props.label)
        ? props.label
        : "field"
    );

    const submitting = submittingInjection.inject();

    const target = ref<QField | QInput>();

    return {
      change: (): void => {
        handlePromise.silent(async () => {
          change++;

          try {
            await as.not.empty(target.value).validate();
          } finally {
            change--;
          }
        });
      },
      rules: computed(() => {
        const rulesOnInput = props.rulesOnInput ?? [];

        const rulesOnChange = props.rulesOnChange ?? [];

        const rulesOnSubmit = fn.run(() => {
          const rules1 =
            props.required ?? false
              ? [
                  (value: T): string | true =>
                    value === undefined
                      ? useValidation.lang.with("field", field.value)
                          .FieldIsRequired
                      : true
                ]
              : [];

          const rules2 = props.rulesOnSubmit ?? [];

          return [...rules1, ...rules2];
        });

        return [
          ...rulesOnInput,
          ...rulesOnChange.map(rule => async () => {
            const prevInvalid = as.boolean(
              reflect.getOwnMetadata(MetadataKey, rule) ?? false
            );

            if (prevInvalid || submitting.value || change) {
              const result = await rule(modelValue());

              reflect.defineMetadata(MetadataKey, result !== true, rule);

              return result;
            }

            return true;
          }),
          ...rulesOnSubmit.map(rule => async () => {
            const prevInvalid = as.boolean(
              reflect.getOwnMetadata(MetadataKey, rule) ?? false
            );

            if (prevInvalid || submitting.value) {
              const result = await rule(modelValue());

              reflect.defineMetadata(MetadataKey, result !== true, rule);

              return result;
            }

            return true;
          })
        ];
      }),
      target
    };
  },
  {
    lang: typedef<baseLang.Lang<keyof useValidation.Word, never>>(baseLang),
    props: {
      label: prop<useValidation.Props["label"]>(),
      required: prop.boolean(),
      rulesOnChange: prop<useValidation.Props["rulesOnChange"]>(),
      rulesOnInput: prop<useValidation.Props["rulesOnInput"]>(),
      rulesOnSubmit: prop<useValidation.Props["rulesOnSubmit"]>()
    } as const
  }
);

export namespace useValidation {
  export type Context = "change" | "input" | "submit";

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
    readonly target: Ref<QField | QInput | undefined>;
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

const MetadataKey = Symbol("prev-invalid");
