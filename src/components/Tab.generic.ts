import { QTab } from "quasar";
import type { Tab } from "./Tab.extras";
import type { NumStrU } from "@skylib/functions";

/**
 * Generic Tab component.
 *
 * @returns Tab component.
 */
export function genericTab<T extends NumStrU>(): Tab.Global<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- Ok
  return QTab as unknown as Tab.Global<T>;
}
