import type {
  QOptionGroup,
  QOptionGroupProps,
  QOptionGroupSlots
} from "quasar";
import type { GlobalComponent } from "./api";
import { lang as baseLang } from "@skylib/facades";
import type { booleanU } from "@skylib/functions";

export namespace OptionGroup {
  export const lang: baseLang.Lang<never, never> = baseLang;

  export interface Global<T = unknown>
    extends GlobalComponent<Props<T>, Slots> {
    readonly main?: QOptionGroup;
  }

  export interface Option<T = unknown> {
    readonly disable?: boolean;
    readonly label: baseLang.Key;
    readonly value: T;
  }

  export type Options<T = unknown> = ReadonlyArray<Option<T>>;

  export interface OwnProps<T = unknown> {
    readonly disable?: booleanU;
    readonly inline?: booleanU;
    readonly modelValue?: T | undefined;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: T) => void;
    readonly options: Options<T>;
  }

  export interface ParentProps
    extends Omit<QOptionGroupProps, keyof OwnProps> {}

  export interface ParentSlots extends QOptionGroupSlots {}

  export interface Props<T = unknown> extends ParentProps, OwnProps<T> {}

  export interface Slots extends ParentSlots {}
}
