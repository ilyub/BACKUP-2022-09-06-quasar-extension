import { QTab } from "quasar";
import type { GlobalComponent } from "./api";
import type { NumStrU } from "@skylib/functions";
import type { QTabProps, QTabSlots } from "quasar";

export type GlobalTab<T extends NumStrU = NumStrU> = GlobalComponent<
  TabProps<T>,
  TabSlots
>;

export interface TabOption<T extends NumStrU = NumStrU> {
  readonly count?: number;
  readonly icon: string;
  readonly label: string;
  readonly value: T;
}

export type TabOptions<T extends NumStrU = NumStrU> = ReadonlyArray<
  TabOption<T>
>;

export interface TabOwnProps<T extends NumStrU = NumStrU> {
  readonly name?: T | undefined;
}

export interface TabParentProps
  extends Readonly<Omit<QTabProps, keyof TabOwnProps>> {}

export interface TabProps<T extends NumStrU = NumStrU>
  extends TabOwnProps<T>,
    TabParentProps {}

export type TabSlots = QTabSlots;

/**
 * Generic Tab component.
 *
 * @returns Tab component.
 */
export function genericTab<T extends NumStrU>(): GlobalTab<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return QTab as unknown as GlobalTab<T>;
}
