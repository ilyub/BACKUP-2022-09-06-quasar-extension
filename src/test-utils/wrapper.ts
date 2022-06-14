import { o, reflect } from "@skylib/functions";
import type * as testUtils from "@vue/test-utils";

/**
 * Clears emitted events.
 *
 * @param wrapper - Wrapper.
 */
export function clearEmitted(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
  wrapper: testUtils.VueWrapper<any>
): void {
  for (const events of o.values(wrapper.emitted())) events.length = 0;
}

/**
 * Sets data.
 *
 * @param wrapper - Wrapper.
 * @param key - Key.
 * @param value - Value.
 */
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
