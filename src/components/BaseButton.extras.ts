import type { QBtnProps, QBtnSlots } from "quasar";

import * as is from "@skylib/functions/es/guards";
import type { booleanU, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import type { ConfirmedClickProps } from "./api/confirmedClickModule";
import type { Direction } from "./Tooltip.extras";

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

export const isAsyncClick: is.Guard<AsyncClick> = is.callable;

export const isAsyncClickU = is.or.factory(isAsyncClick, is.undefined);
