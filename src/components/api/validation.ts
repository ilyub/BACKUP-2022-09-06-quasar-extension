import { prop } from "./misc";
import { submitting as submittingInjection } from "./submitting";
import { handlePromise } from "@skylib/facades";
import { as, defineFn, reflect } from "@skylib/functions";
import { computed, ref } from "vue";
import type { SetupProps } from "./core";
import type { Writable } from "@skylib/functions";
import type { QField, QInput, ValidationRule } from "quasar";
import type { ComputedRef, Ref } from "vue";

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

    const submitting = submittingInjection.inject();

    const target = ref<QField | QInput>();

    return {
      change: (): void => {
        handlePromise.silent(async () => {
          change++;

          try {
            await as.not.empty(target.value).validate(modelValue());
          } finally {
            change--;
          }
        });
      },
      rules: computed(() => {
        const rulesOnInput = props.rulesOnInput ?? [];

        const rulesOnChange = props.rulesOnChange ?? [];

        const rulesOnSubmit = props.rulesOnSubmit ?? [];

        return [
          ...rulesOnInput,
          ...rulesOnChange.map(rule => async (value: T) => {
            const prevInvalid = as.boolean(
              reflect.getOwnMetadata(MetadataKey, rule) ?? false
            );

            if (prevInvalid || submitting.value || change) {
              const result = await rule(value);

              reflect.defineMetadata(MetadataKey, result !== true, rule);

              return result;
            }

            return true;
          }),
          ...rulesOnSubmit.map(rule => async (value: T) => {
            const prevInvalid = as.boolean(
              reflect.getOwnMetadata(MetadataKey, rule) ?? false
            );

            if (prevInvalid || submitting.value) {
              const result = await rule(value);

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
    props: {
      rulesOnChange: prop<useValidation.Props["rulesOnChange"]>(),
      rulesOnInput: prop<useValidation.Props["rulesOnInput"]>(),
      rulesOnSubmit: prop<useValidation.Props["rulesOnSubmit"]>()
    } as const
  }
);

export namespace useValidation {
  export type Context = "change" | "input" | "submit";

  export interface OwnProps<T = unknown> {
    readonly rulesOnChange?: Rules<T> | undefined;
    readonly rulesOnInput?: Rules<T> | undefined;
    readonly rulesOnSubmit?: Rules<T> | undefined;
  }

  export interface Plugin<T = unknown> {
    /**
     * Handles "change" event.
     */
    readonly change: () => void;
    readonly rules: ComputedRef<Writable<QuasarRules<T>>>;
    readonly target: Ref<QField | QInput | undefined>;
  }

  export interface Props<T = unknown> extends OwnProps<T> {}

  export type QuasarRules<T = unknown> = ReadonlyArray<ValidationRule<T>>;

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
}

const MetadataKey = Symbol("prev-invalid");
