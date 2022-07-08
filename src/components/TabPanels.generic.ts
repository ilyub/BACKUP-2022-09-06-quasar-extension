import type { NumStrU } from "@skylib/functions";
import { QTabPanels } from "quasar";
import type { TabPanels } from "./TabPanels.extras";

/**
 * Generic TabPanels component.
 *
 * @returns TabPanels component.
 */
export function genericTabPanels<T extends NumStrU>(): TabPanels.Global<T> {
  return QTabPanels as unknown as TabPanels.Global<T>;
}
