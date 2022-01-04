import type { QVirtualScroll } from "quasar";

import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

export type Direction = "decrease" | "increase";

export interface VirtualScrollEvent {
  readonly direction: Direction;
  readonly from: number;
  readonly index: number;
  readonly ref: QVirtualScroll;
  readonly to: number;
}

export const DirectionVO = createValidationObject<Direction>({
  decrease: "decrease",
  increase: "increase"
});

export const isDirection = is.factory(is.enumeration, DirectionVO);

export const isVirtualScrollEvent: is.Guard<VirtualScrollEvent> = is.factory(
  is.object.of,
  {
    direction: isDirection,
    from: is.number,
    index: is.number,
    ref: isVirtualScroll,
    to: is.number
  },
  {}
);

/**
 * Checks that value type is QVirtualScroll.
 *
 * @param value - Value.
 * @returns _True_ if value type is QVirtualScroll, _false_ otherwise.
 */
export function isVirtualScroll(value: unknown): value is QVirtualScroll {
  return is.object(value);
}
