import { o } from "@skylib/functions";
import type * as testUtils from "@vue/test-utils";

// eslint-disable-next-line no-restricted-syntax -- Ok
export * from "./jest";

export * as mocks from "./mocks";

// eslint-disable-next-line no-restricted-syntax -- Ok
export * from "./wrapper";

export { findFactory } from "./find-factory";

export { globalMountOptions } from "./global-mount-options";

/**
 * Clears emitted events.
 *
 * @param wrapper - Wrapper.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
export function clearEmitted(wrapper: testUtils.VueWrapper<any>): void {
  for (const events of o.values(wrapper.emitted())) events.length = 0;
}
