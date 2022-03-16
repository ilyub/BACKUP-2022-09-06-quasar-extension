import type { QTabProps, QTabSlots } from "quasar";
import { QTab } from "quasar";

import type { numberU, NumStrU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

export interface TabOption<T extends NumStrU = NumStrU> {
  readonly count: numberU;
  readonly icon: string;
  readonly label: string;
  readonly value: T;
}

export type TabOptions<T extends NumStrU = NumStrU> = ReadonlyArray<
  TabOption<T>
>;

export interface TabOwnProps<T extends NumStrU = NumStrU> {
  readonly name?: T;
}

export interface TabParentProps
  extends Readonly<Omit<QTabProps, keyof TabOwnProps>> {}

export interface TabProps<T extends NumStrU = NumStrU>
  extends TabOwnProps<T>,
    TabParentProps {}

export type TabSlots = QTabSlots;

// eslint-disable-next-line @skylib/prefer-readonly
export type GlobalTab<T extends NumStrU = NumStrU> = GlobalComponent<
  TabProps<T>,
  TabSlots
>;

/**
 * Generic Tab component.
 *
 * @returns Tab component.
 */
export function genericTab<T extends NumStrU>(): GlobalTab<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return QTab as unknown as GlobalTab<T>;
}
