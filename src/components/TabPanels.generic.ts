import { QTabPanels } from "quasar";
import type { TabPanels } from "./TabPanels.extras";
import type { NumStrU } from "@skylib/functions";

/**
 * Generic TabPanels component.
 *
 * @returns TabPanels component.
 */
export function genericTabPanels<T extends NumStrU>(): TabPanels.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return QTabPanels as unknown as TabPanels.Global<T>;
}
