import { reflect } from "@skylib/functions";
import type * as testUtils from "@vue/test-utils";
import type { ComponentConstructor } from "quasar";
import type { ComponentPublicInstance } from "vue";

/**
 * Finds quasar component.
 *
 * @param wrapper - Wrapper.
 * @param ctor - Component constructor.
 * @returns Quasar component.
 */
export function findQuasarComponent<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
  wrapper: testUtils.VueWrapper<any>,
  ctor: ComponentConstructor<T>
): testUtils.VueWrapper<ComponentPublicInstance<T>> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- Ok
  return wrapper.findComponent(ctor);
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
