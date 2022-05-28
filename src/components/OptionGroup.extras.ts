import type { GlobalComponent } from "./api";
import type { booleanU } from "@skylib/functions";
import type {
  QOptionGroup,
  QOptionGroupProps,
  QOptionGroupSlots
} from "quasar";

export namespace OptionGroup {
  export interface Global<T = unknown>
    extends GlobalComponent<Props<T>, Slots> {
    readonly main: QOptionGroup;
  }

  export interface Option<T = unknown> {
    readonly disable?: true;
    readonly label: string;
    readonly value: T;
  }

  export type Options<T = unknown> = ReadonlyArray<Option<T>>;

  export interface OwnProps<T = unknown> {
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

  export interface Props<T = unknown> extends ParentProps, OwnProps<T> {}

  export interface Slots extends QOptionGroupSlots {}
}
