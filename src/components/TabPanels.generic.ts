import type { QTabPanelsProps, QTabPanelsSlots } from "quasar";
import { QTabPanels } from "quasar";

import type { NumStrU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";

export type GlobalTabPanels<T extends NumStrU = NumStrU> = GlobalComponent<
  TabPanelsProps<T>,
  TabPanelsSlots
>;

export interface TabPanelsOwnProps<T extends NumStrU = NumStrU> {
  modelValue?: T;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  "onUpdate:modelValue"?: (value: T) => void;
}

export interface TabPanelsParentProps
  extends Readonly<Omit<QTabPanelsProps, keyof TabPanelsOwnProps>> {}

export interface TabPanelsProps<T extends NumStrU = NumStrU>
  extends TabPanelsOwnProps<T>,
    TabPanelsParentProps {}

export type TabPanelsSlots = QTabPanelsSlots;

/**
 * Generic TabPanels component.
 *
 * @returns TabPanels component.
 */
export function genericTabPanels<T extends NumStrU>(): GlobalTabPanels<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return QTabPanels as unknown as GlobalTabPanels<T>;
}
