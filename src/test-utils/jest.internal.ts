import * as testUtils from "@skylib/functions/dist/test-utils";
import type * as vueTestUtils from "@vue/test-utils";
import { a, as, is } from "@skylib/functions";
import type { WrapperLike } from "./core";
import { equals } from "@jest/expect-utils";
import type { types } from "@skylib/functions";

// eslint-disable-next-line no-console -- Ok
export const warn: types.fn.Callable = console.warn;

export const matchers: {
  readonly htmlToEqual: testUtils.ExpectFromMatcher<"htmlToEqual">;
  readonly textToEqual: testUtils.ExpectFromMatcher<"textToEqual">;
  readonly toBeVisible: testUtils.ExpectFromMatcher<"toBeVisible">;
  readonly toExist: testUtils.ExpectFromMatcher<"toExist">;
  readonly toHaveClass: testUtils.ExpectFromMatcher<"toHaveClass">;
  readonly toHaveEmitted: testUtils.ExpectFromMatcher<"toHaveEmitted">;
} = {
  htmlToEqual: (got, expected) => {
    got = as.byGuard(got, isWrapperLike).html();

    return testUtils.buildEqualsResult(
      got === expected,
      "Unexpected html",
      got,
      expected
    );
  },
  textToEqual: (got, expected) => {
    got = as.byGuard(got, isWrapperLike).text();

    return testUtils.buildEqualsResult(
      got === expected,
      "Unexpected text",
      got,
      expected
    );
  },
  toBeVisible: got =>
    testUtils.buildResult(
      as.byGuard(got, isWrapperLike).isVisible(),
      "Expected Vue wrapper to be visible",
      "Expected Vue wrapper not to be visible"
    ),
  toExist: got =>
    testUtils.buildResult(
      as.byGuard(got, isWrapperLike).exists(),
      "Expected Vue wrapper to exist",
      "Expected Vue wrapper not to exist"
    ),
  toHaveClass: (got, expected) =>
    testUtils.buildResult(
      as.byGuard(got, isWrapperLike).classes().includes(expected),
      `Expected Vue wrapper to have "${expected}" class`,
      `Expected Vue wrapper not to have "${expected}" class`
    ),
  toHaveEmitted: (got, name, ...expected) => {
    const emitted = as.byGuard(got, isVueWrapper).emitted(name) ?? [];

    const result = testUtils.buildEqualsResult(
      equals(emitted, expected),
      "Unexpected mock calls",
      emitted,
      expected,
      true
    );

    a.truncate(emitted);

    return result;
  }
};

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
