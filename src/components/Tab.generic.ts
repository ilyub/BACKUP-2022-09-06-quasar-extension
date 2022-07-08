import type { NumStrU } from "@skylib/functions";
import { QTab } from "quasar";
import type { Tab } from "./Tab.extras";

/**
 * Generic Tab component.
 *
 * @returns Tab component.
 */
export function genericTab<T extends NumStrU>(): Tab.Global<T> {
  return QTab as unknown as Tab.Global<T>;
}
