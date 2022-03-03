import type { QBtnProps, QBtnSlots } from "quasar";

import type { booleanU, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import type { Direction } from "./Tooltip.extras";

export interface BaseButtonOwnProps {
  readonly disable?: booleanU;
  readonly modelValue?: booleanU;
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
