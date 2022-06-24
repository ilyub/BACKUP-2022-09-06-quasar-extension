import { QTabs } from "quasar";
import type { Tabs } from "./Tabs.extras";
import type { NumStrU } from "@skylib/functions";

/**
 * Generic Tabs component.
 *
 * @returns Tabs component.
 */
export function genericTabs<T extends NumStrU>(): Tabs.Global<T> {
  return QTabs as unknown as Tabs.Global<T>;
}
