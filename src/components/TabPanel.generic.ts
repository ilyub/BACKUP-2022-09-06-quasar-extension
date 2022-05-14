import { QTabPanel } from "quasar";
import type { TabPanel } from "./TabPanel.extras";
import type { NumStrU } from "@skylib/functions";

/**
 * Generic TabPanel component.
 *
 * @returns TabPanel component.
 */
export function genericTabPanel<T extends NumStrU>(): TabPanel.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return QTabPanel as unknown as TabPanel.Global<T>;
}
