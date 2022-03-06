import type { QBtnProps, QBtnSlots } from "quasar";

import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { booleanU, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import type { Direction } from "./Tooltip.extras";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

export interface BaseButtonOwnProps {
  readonly confirmation?: stringU;
  readonly disable?: booleanU;
  readonly modelValue?: booleanU;
  /**
   * Emits confirmed click event.
   */
  readonly onConfirmedClick?: () => void;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: (value: boolean) => void;
  readonly tooltip?: stringU;
  readonly tooltipDirection?: Direction | undefined;
}

export interface BaseButtonParentProps extends Omit<QBtnProps, "disable"> {}

export interface BaseButtonProps
  extends BaseButtonParentProps,
    BaseButtonOwnProps {}

export type BaseButtonSlots = Readonly<QBtnSlots>;

export type GlobalBaseButton = GlobalComponent<
  BaseButtonProps,
  BaseButtonSlots
>;

export interface ModuleWord {
  readonly Cancel: true;
  readonly Confirm: true;
  readonly Ok: true;
}

export const lang: DictionaryAndWords<keyof ModuleWord> = baseLang;
