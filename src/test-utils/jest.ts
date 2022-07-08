import { matchers, warn } from "./jest.internal";
import { implementations } from "..";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { is } from "@skylib/functions";
import { reactiveStorage } from "@skylib/facades";
import type { unknowns } from "@skylib/functions";

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks that Vue wrapper contains expected HTML code.
       *
       * @param expected - Expected HTML code.
       * @returns Result object.
       */
      readonly htmlToEqual: (expected: string) => R;
      /**
       * Checks that Vue wrapper contains expected text.
       *
       * @param expected - Expected text.
       * @returns Result object.
       */
      readonly textToEqual: (expected: string) => R;
      /**
       * Checks that Vue wrapper is visible.
       *
       * @returns Result object.
       */
      readonly toBeVisible: () => R;
      /**
       * Checks that Vue wrapper exists.
       *
       * @returns Result object.
       */
      readonly toExist: () => R;
      /**
       * Checks that Vue wrapper has class.
       *
       * @param expected - Expected class name.
       * @returns Result object.
       */
      readonly toHaveClass: (expected: string) => R;
      /**
       * Checks that Vue wrapper emitted events.
       *
       * @param name - Event name.
       * @param expected - Expected events.
       * @returns Result object.
       */
      readonly toHaveEmitted: (name: string, ...expected: unknowns) => R;
    }
  }
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
