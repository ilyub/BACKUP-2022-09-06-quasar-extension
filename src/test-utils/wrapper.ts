import { reflect } from "@skylib/functions";
import type * as testUtils from "@vue/test-utils";

/**
 * Sets data.
 *
 * @param wrapper - Wrapper.
 * @param key - Key.
 * @param value - Value.
 */
// eslint-disable-next-line @skylib/only-export-name -- Ok
export function setData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
  wrapper: testUtils.VueWrapper<any>,
  key: string,
  value: unknown
): void {
  // eslint-disable-next-line no-warning-comments -- Wait for @skylib/functions update
  // fixme - Use o.set
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- Ok
  reflect.set(wrapper.vm, key, value);
}
