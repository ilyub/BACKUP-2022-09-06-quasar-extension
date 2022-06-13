import { o } from "@skylib/functions";
import type * as testUtils from "@vue/test-utils";

/**
 * Clears emitted events.
 *
 * @param wrapper - Wrapper.
 */
// eslint-disable-next-line @skylib/only-export-name, @typescript-eslint/no-explicit-any -- Ok
export function clearEmitted(wrapper: testUtils.VueWrapper<any>): void {
  for (const events of o.values(wrapper.emitted())) events.length = 0;
}
