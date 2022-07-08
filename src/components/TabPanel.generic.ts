import type { NumStrU } from "@skylib/functions";
import { QTabPanel } from "quasar";
import type { TabPanel } from "./TabPanel.extras";

/**
 * Generic TabPanel component.
 *
 * @returns TabPanel component.
 */
export function genericTabPanel<T extends NumStrU>(): TabPanel.Global<T> {
  return QTabPanel as unknown as TabPanel.Global<T>;
}
