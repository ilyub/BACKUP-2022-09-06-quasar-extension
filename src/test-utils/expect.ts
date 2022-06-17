import { assert, is } from "@skylib/functions";
// eslint-disable-next-line @skylib/consistent-import -- Postponed
import expectMatchers from "expect/build/matchers";
import type { WrapperLike } from "./core";
import type { unknowns } from "@skylib/functions";
import type * as testUtils from "@skylib/functions/dist/test-utils";
import type * as vueTestUtils from "@vue/test-utils";

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

export const htmlToEqual: testUtils.ExpectFromMatcher<"htmlToEqual"> = (
  got,
  expected
) => {
  assert.byGuard(got, isWrapperLike);

  return got.html() === expected
    ? {
        message: (): string => `Expected HTML code not to be "${expected}"`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected HTML code ("${got.html()}") to be "${expected}"`,
        pass: false
      };
};

export const textToEqual: testUtils.ExpectFromMatcher<"textToEqual"> = (
  got,
  expected
) => {
  assert.byGuard(got, isWrapperLike);

  return got.text() === expected
    ? {
        message: (): string => `Expected text not to be "${expected}"`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected text ("${got.text()}") to be "${expected}"`,
        pass: false
      };
};

export const toBeVisible: testUtils.ExpectFromMatcher<"toBeVisible"> = got => {
  assert.byGuard(got, isWrapperLike);

  return got.isVisible()
    ? {
        message: (): string => "Expected Vue wrapper not to be visible",
        pass: true
      }
    : {
        message: (): string => "Expected Vue wrapper to be visible",
        pass: false
      };
};

export const toExist: testUtils.ExpectFromMatcher<"toExist"> = got => {
  assert.byGuard(got, isWrapperLike);

  return got.exists()
    ? {
        message: (): string => "Expected Vue wrapper not to exist",
        pass: true
      }
    : { message: (): string => "Expected Vue wrapper to exist", pass: false };
};

export const toHaveClass: testUtils.ExpectFromMatcher<"toHaveClass"> = (
  got,
  expected
) => {
  assert.byGuard(got, isWrapperLike);

  return got.classes().includes(expected)
    ? {
        message: (): string =>
          `Expected Vue wrapper not to have "${expected}" class`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected Vue wrapper to have "${expected}" class`,
        pass: false
      };
};

export const toHaveEmitted: testUtils.ExpectFromMatcher<"toHaveEmitted"> = (
  got,
  name,
  ...expected
) => {
  assert.byGuard(got, isVueWrapper);

  const emitted = got.emitted(name) ?? [];

  const result = expectMatchers.toStrictEqual(emitted, expected);

  emitted.length = 0;

  return result;
};

export const matchers = {
  htmlToEqual,
  textToEqual,
  toBeVisible,
  toExist,
  toHaveClass,
  toHaveEmitted
} as const;

/**
 * Checks if value type is VueWrapper.
 *
 * @param value - Value.
 * @returns _True_ if value type is VueWrapper, _false_ otherwise.
 */
function isVueWrapper(value: unknown): value is vueTestUtils.VueWrapper {
  return is.indexedObject(value) && is.callable(value["exists"]);
}

/**
 * Checks if value type is WrapperLike.
 *
 * @param value - Value.
 * @returns _True_ if value type is WrapperLike, _false_ otherwise.
 */
function isWrapperLike(value: unknown): value is WrapperLike {
  return is.indexedObject(value) && is.callable(value["exists"]);
}
