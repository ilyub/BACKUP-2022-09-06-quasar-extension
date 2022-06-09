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

  export interface ParentProps
    extends Omit<QSelectProps, keyof OwnProps | keyof PluginProps> {}

  export interface ParentSlots extends QSelectSlots {}

  export interface PluginProps<T = unknown>
    extends plugins.useLabel.Props,
      plugins.useValidation.Props<T> {}

  export interface Props<T = unknown>
    extends ParentProps,
      PluginProps<T>,
      OwnProps<T> {}

  export interface Slots extends ParentSlots {}

  export interface Word {
    readonly SelectField: true;
  }
}
