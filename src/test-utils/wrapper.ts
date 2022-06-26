import { o } from "@skylib/functions";
import type { Wrapper } from "./core";
import type { ComponentConstructor } from "quasar";

/**
 * Finds quasar component.
 *
 * @param wrapper - Wrapper.
 * @param ctor - Component constructor.
 * @returns Quasar component.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types -- Ok
export function findQuasarComponent<T>(
  wrapper: Wrapper,
  ctor: ComponentConstructor<T>
) {
  return wrapper.findComponent(ctor);
}

/**
 * Sets data.
 *
 * @param wrapper - Wrapper.
 * @param key - Key.
 * @param value - Value.
 */
export function setData(wrapper: Wrapper, key: string, value: unknown): void {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- Ok
  o.set(wrapper.vm, key, value);
}
