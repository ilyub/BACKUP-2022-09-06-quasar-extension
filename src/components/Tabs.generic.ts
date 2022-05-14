import { QTabs } from "quasar";
import type { Tabs } from "./Tabs.extras";
import type { NumStrU } from "@skylib/functions";

/**
 * Generic Tabs component.
 *
 * @returns Tabs component.
 */
export function genericTabs<T extends NumStrU>(): Tabs.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return QTabs as unknown as Tabs.Global<T>;
}
