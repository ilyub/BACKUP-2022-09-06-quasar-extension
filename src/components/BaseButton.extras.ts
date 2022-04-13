import type { booleanU, stringU } from "@skylib/functions/es/types/core";
import type { QBtnProps, QBtnSlots } from "quasar";
import type { Direction } from "./Tooltip.extras";
import type { GlobalComponent } from "./api";
import type { ConfirmedClickProps } from "./api/confirmedClickModule";

export interface AsyncClick {
  /**
   * Handles click.
   */
  (): Promise<void>;
}

export interface BaseButtonOwnProps extends ConfirmedClickProps {
  readonly asyncClick?: AsyncClick | undefined;
  readonly disable?: booleanU;
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
