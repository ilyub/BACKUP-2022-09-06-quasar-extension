import { lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, plugins } from "./api";
import type { booleanU } from "@skylib/functions";
import type { QSelect, QSelectProps, QSelectSlots } from "quasar";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Select.Word {}
    }
  }
}

export namespace Select {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Global<T = unknown>
    extends GlobalComponent<Props<T>, Slots> {
    readonly main?: QSelect;
  }

  export interface Option<T = unknown> {
    // eslint-disable-next-line no-restricted-syntax -- Ok
    readonly disable?: boolean;
    readonly label: baseLang.Key;
    readonly value: T;
  }

  export type Options<T = unknown> = ReadonlyArray<Option<T>>;

  export interface OwnProps<T = unknown> {
    readonly disable?: booleanU;
    readonly modelValue?: T | undefined;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
    readonly options: Options<T>;
    readonly required?: booleanU;
    readonly validationLabel?: baseLang.Key | undefined;
  }

  export interface ParentProps
    extends Omit<QSelectProps, keyof OwnProps | keyof PluginProps> {}

  export interface ParentSlots extends QSelectSlots {}

  export interface PluginProps<T = unknown>
    extends plugins.langProps.Props<"initialLabel" | "label">,
      plugins.validation.Props<T> {}

  export interface Props<T = unknown>
    extends ParentProps,
      PluginProps<T>,
      OwnProps<T> {}

  export interface Slots extends ParentSlots {}

  export interface Word {
    readonly SelectField: true;
  }
}
