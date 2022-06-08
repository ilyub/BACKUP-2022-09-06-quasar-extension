import { lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, plugins } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QSelect, QSelectProps, QSelectSlots } from "quasar";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Select.Word {
        readonly main: QSelect;
      }
    }
  }
}

export namespace Select {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Global<T = unknown>
    extends GlobalComponent<Props<T>, Slots> {}

  export interface Option<T = unknown> {
    readonly disable?: true;
    readonly label: string;
    readonly value: T;
  }

  export type Options<T = unknown> = ReadonlyArray<Option<T>>;

  export interface OwnProps<T = unknown> {
    readonly disable?: booleanU;
    readonly initialLabel?: baseLang.Transform<baseLang.Word> | undefined;
    readonly label?: baseLang.Transform<baseLang.Word> | undefined;
    readonly modelValue?: T | undefined;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
    readonly options: Options<T>;
    readonly required?: booleanU;
    readonly validationLabel?: stringU;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps<T = unknown>
    extends Omit<QSelectProps, keyof OwnProps>,
      Omit<plugins.useValidation.Props<T>, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QSelectSlots, keyof OwnSlots> {}

  export interface Props<T = unknown> extends ParentProps<T>, OwnProps<T> {}

  export interface Slots extends ParentSlots, OwnSlots {}

  export interface Word {
    readonly SelectField: true;
  }
}
