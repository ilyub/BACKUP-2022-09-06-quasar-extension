import { lang as baseLang } from "@skylib/facades";
import { is } from "@skylib/functions";
import type { GlobalComponent } from "./api";
import type { stringU } from "@skylib/functions";
import type { QSelectProps, QSelectSlots } from "quasar";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

export const isSelectOption = is.object.factory<SelectOption>(
  { label: is.string, value: is.unknown },
  { disable: is.boolean }
);

export const isSelectOptions = is.factory(is.array.of, isSelectOption);

export const lang: baseLang.Lang<keyof ModuleWord, never> = baseLang;

export type GlobalSelect<T = unknown> = GlobalComponent<
  SelectProps<T>,
  SelectSlots
>;

export interface ModuleWord {
  readonly Select: true;
}

export interface SelectOption<T = unknown> {
  readonly disable?: boolean;
  readonly label: string;
  readonly value: T;
}

export type SelectOptions<T = unknown> = ReadonlyArray<SelectOption<T>>;

export interface SelectOwnProps<T = unknown> {
  readonly initialLabel?: stringU;
  readonly modelValue?: T | undefined;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: T) => void;
  readonly options: SelectOptions<T>;
}

export interface SelectParentProps
  extends Omit<
    QSelectProps,
    "modelValue" | "onUpdate:modelValue" | "options"
  > {}

export interface SelectProps<T = unknown>
  extends SelectParentProps,
    SelectOwnProps<T> {}

export type SelectSlots = QSelectSlots;
