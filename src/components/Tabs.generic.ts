import type { NumStrU } from "@skylib/functions/es/types/core";
import type { QTabsProps, QTabsSlots } from "quasar";
import { QTabs } from "quasar";
import type { GlobalComponent } from "./api";

export type GlobalTabs<T extends NumStrU = NumStrU> = GlobalComponent<
  TabsProps<T>,
  TabsSlots
>;

export interface TabsOwnProps<T extends NumStrU = NumStrU> {
  modelValue?: T;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  "onUpdate:modelValue"?: (value: T) => void;
}

export interface TabsParentProps
  extends Readonly<Omit<QTabsProps, keyof TabsOwnProps>> {}

export interface TabsProps<T extends NumStrU = NumStrU>
  extends TabsOwnProps<T>,
    TabsParentProps {}

export type TabsSlots = QTabsSlots;

/**
 * Generic Tabs component.
 *
 * @returns Tabs component.
 */
export function genericTabs<T extends NumStrU>(): GlobalTabs<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return QTabs as unknown as GlobalTabs<T>;
}
