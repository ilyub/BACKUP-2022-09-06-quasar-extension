import { lang as baseLang } from "@skylib/facades";
import type { GlobalComponent } from "./api";
import type { stringU } from "@skylib/functions";
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
    readonly initialLabel?: stringU;
    readonly modelValue?: T | undefined;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
    readonly options: Options<T>;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<QSelectProps, keyof OwnProps> {}

  export interface ParentSlots extends Omit<QSelectSlots, keyof OwnSlots> {}

  export interface Props<T = unknown> extends ParentProps, OwnProps<T> {}

  export interface Slots extends ParentSlots, OwnSlots {}

  export interface Word {
    readonly Select: true;
  }
}
