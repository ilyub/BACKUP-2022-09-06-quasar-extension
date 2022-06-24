import { QTab } from "quasar";
import type { Tab } from "./Tab.extras";
import type { NumStrU } from "@skylib/functions";

/**
 * Generic Tab component.
 *
 * @returns Tab component.
 */
export function genericTab<T extends NumStrU>(): Tab.Global<T> {
  return QTab as unknown as Tab.Global<T>;
}
