import { implementations } from "..";
import { matchers } from "./expect";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { reactiveStorage } from "@skylib/facades";
import { o } from "@skylib/functions";
import type * as testUtils from "@vue/test-utils";

export * as mocks from "./mocks";

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

/**
 * Jest reset.
 */
export function jestReset(): void {
  reactiveStorage.setImplementation(implementations.reactiveStorage.vueStorage);
}

/**
 * Jest setup.
 */
export function jestSetup(): void {
  expect.extend(matchers);
  window.scrollTo = jest.fn();
  installQuasarPlugin();
  jestReset();
}
