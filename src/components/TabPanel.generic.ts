import type { NumStrU } from "@skylib/functions";
import type { QTabPanelProps, QTabPanelSlots } from "quasar";
import { QTabPanel } from "quasar";
import type { GlobalComponent } from "./api";

export type GlobalTabPanel<T extends NumStrU = NumStrU> = GlobalComponent<
  TabPanelProps<T>,
  TabPanelSlots
>;

export interface TabPanelOwnProps<T extends NumStrU = NumStrU> {
  readonly name?: T;
}

export interface TabPanelParentProps
  extends Readonly<Omit<QTabPanelProps, keyof TabPanelOwnProps>> {}

export interface TabPanelProps<T extends NumStrU = NumStrU>
  extends TabPanelOwnProps<T>,
    TabPanelParentProps {}

export type TabPanelSlots = QTabPanelSlots;

/**
 * Generic TabPanel component.
 *
 * @returns TabPanel component.
 */
export function genericTabPanel<T extends NumStrU>(): GlobalTabPanel<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return QTabPanel as unknown as GlobalTabPanel<T>;
}
