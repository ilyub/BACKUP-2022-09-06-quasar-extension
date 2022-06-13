import { implementations } from "..";
import { matchers } from "./expect";
import { warn } from "./jest.internal";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { reactiveStorage } from "@skylib/facades";
import { is } from "@skylib/functions";
import type { unknowns } from "@skylib/functions";

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
  window.scrollTo = jest.fn();
  installQuasarPlugin();
  expect.extend(matchers);
  jest.spyOn(console, "warn").mockImplementation(warnMock);
  jestReset();

  function warnMock(...args: unknowns): void {
    if (
      is.string(args[0]) &&
      /^\[Vue warn\]: Component emitted event "[^"]+" but it is neither/u.test(
        args[0]
      )
    ) {
      // Ignore
    } else {
      warn(...args);

      throw new Error("Console warn");
    }
  }
}
