import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { reactiveStorage } from "@skylib/facades";
import { a, assert, fn, is, o } from "@skylib/functions";
import type { WritableRecord } from "@skylib/functions";
import type * as testUtils from "@skylib/functions/dist/testUtils";
import type * as vueTestUtils from "@vue/test-utils";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";
import type { ComponentConstructor } from "quasar";
import type { Component, ComponentPublicInstance, Directive } from "vue";
import { implementations, components } from "..";

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
    }
  }
}

export const htmlToEqual: testUtils.ExpectFromMatcher<"htmlToEqual"> = (
  got,
  expected
) => {
  assert.byGuard(got, isWrapper);

  return got.html() === expected
    ? {
        message: (): string => `Expected HTML code not to be "${expected}"`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected HTML code to be "${expected}", got "${got.html()}"`,
        pass: false
      };
};

export const textToEqual: testUtils.ExpectFromMatcher<"textToEqual"> = (
  got,
  expected
) => {
  assert.byGuard(got, isWrapper);

  return got.text() === expected
    ? {
        message: (): string => `Expected text not to be "${expected}"`,
        pass: true
      }
    : {
        message: (): string =>
          `Expected text to be "${expected}", got "${got.text()}"`,
        pass: false
      };
};

export const toBeVisible: testUtils.ExpectFromMatcher<"toBeVisible"> = got => {
  assert.byGuard(got, isWrapper);

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
  assert.byGuard(got, isWrapper);

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
  assert.byGuard(got, isWrapper);

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

export interface CustomGlobalMountOptions {
  readonly iconPickerSettings?: components.IconPickerSettings;
  readonly languagePickerSettings?: components.LanguagePickerSettings;
  readonly pageLayoutSettings?: components.PageLayoutSettings;
  readonly resizerSettings?: components.ResizerSettings;
  readonly sortableSettings?: components.SortableSettings;
  readonly switchableSettings?: components.SwitchableSettings;
  readonly tableSettings?: components.TableSettings;
  readonly tooltipSettings?: components.TooltipSettings;
}

export interface TouchPanMock {
  readonly touchPan: Directive;
  /**
   * Triggers v-touch-pan directive.
   *
   * @param args - Arguments.
   */
  readonly triggerTouchPan: (...args: unknown[]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VueWrapper = vueTestUtils.VueWrapper<any>;

/**
 * Clears emitted events.
 *
 * @param wrapper - Wrapper.
 */
export function clearEmitted(wrapper: VueWrapper): void {
  for (const events of o.values(wrapper.emitted())) events.length = 0;
}

/**
 * Find component factory.
 *
 * @param wrapper - Wrapper.
 * @returns Find component function.
 */
export function findComponentByRefFactory(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapper: vueTestUtils.VueWrapper<any>
) {
  return (ref: string): vueTestUtils.VueWrapper =>
    wrapper.findComponent<ComponentPublicInstance>({ ref });
}

/**
 * Find component factory.
 *
 * @param prefix - Prefix.
 * @param wrapper - Wrapper.
 * @returns Find component function.
 */
export function findComponentFactory(
  prefix: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapper: vueTestUtils.VueWrapper<any>
) {
  return (
    ref: ComponentConstructor | string,
    index = 0
  ): vueTestUtils.VueWrapper => {
    if (index) {
      assert.string(ref);

      return a.get(
        wrapper.findAllComponents<ComponentPublicInstance>(`${prefix}${ref}`),
        index
      );
    }

    return wrapper.findComponent<ComponentPublicInstance>(
      is.string(ref) ? `${prefix}${ref}` : ref
    );
  };
}

/**
 * Find HTML element factory.
 *
 * @param prefix - Prefix.
 * @param wrapper - Wrapper.
 * @returns Find HTML element function.
 */
export function findElementFactory(
  prefix: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapper: vueTestUtils.VueWrapper<any>
) {
  return (ref: string): vueTestUtils.DOMWrapper<Element> =>
    wrapper.find(`${prefix}${ref}`);
}

/**
 * Find HTML element factory.
 *
 * @param prefix - Prefix.
 * @param wrapper - Wrapper.
 * @returns Find HTML element function.
 */
export function findElementsFactory(
  prefix: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  wrapper: vueTestUtils.VueWrapper<any>
) {
  return (ref: string): Array<vueTestUtils.DOMWrapper<Element>> =>
    wrapper.findAll(`${prefix}${ref}`);
}

/**
 * Find component factory.
 *
 * @param prefix - Prefix.
 * @param wrapper - Wrapper.
 * @returns Find component function.
 */
export function findFactory(
  prefix: string,
  wrapper: VueWrapper
): {
  readonly comp: ReturnType<typeof findComponentFactory>;
  readonly compByRef: ReturnType<typeof findComponentByRefFactory>;
  readonly elem: ReturnType<typeof findElementFactory>;
  readonly elems: ReturnType<typeof findElementsFactory>;
} {
  return {
    comp: findComponentFactory(prefix, wrapper),
    compByRef: findComponentByRefFactory(wrapper),
    elem: findElementFactory(prefix, wrapper),
    elems: findElementsFactory(prefix, wrapper)
  };
}

/**
 * Returns global mount options.
 *
 * @param options - Options.
 * @returns Global mount options.
 */
export function globalMountOptions(
  options: CustomGlobalMountOptions = {}
): GlobalMountOptions {
  return {
    components: fn.run(() => {
      const result: WritableRecord<string, Component | object> = {};

      for (const component of components.components)
        result[component.name] = component;

      return result;
    }),
    provide: fn.run(() => {
      const result: WritableRecord<symbol, unknown> = {};

      if ("iconPickerSettings" in options)
        components.testIconPickerSettings(result, options.iconPickerSettings);

      if ("languagePickerSettings" in options)
        components.testLanguagePickerSettings(
          result,
          options.languagePickerSettings
        );

      if ("pageLayoutSettings" in options)
        components.testPageLayoutSettings(result, options.pageLayoutSettings);

      if ("tableSettings" in options)
        components.testTableSettings(result, options.tableSettings);

      if ("resizerSettings" in options)
        components.testResizerSettings(result, options.resizerSettings);

      if ("switchableSettings" in options)
        components.testSwitchableSettings(result, options.switchableSettings);

      if ("sortableSettings" in options)
        components.testSortableSettings(result, options.sortableSettings);

      if ("tooltipSettings" in options)
        components.testTooltipSettings(result, options.tooltipSettings);

      return result;
    })
  };
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
  {
    const expectExtend: ExpectExtendMap = {
      htmlToEqual,
      textToEqual,
      toBeVisible,
      toExist,
      toHaveClass
    };

    // eslint-disable-next-line no-type-assertion/no-type-assertion
    expect.extend(expectExtend as ExpectExtendMap & jest.ExpectExtendMap);

    interface ExpectExtendMap {
      readonly htmlToEqual: testUtils.ExpectFromMatcher<"htmlToEqual">;
      readonly textToEqual: testUtils.ExpectFromMatcher<"textToEqual">;
      readonly toBeVisible: testUtils.ExpectFromMatcher<"toExist">;
      readonly toExist: testUtils.ExpectFromMatcher<"toExist">;
      readonly toHaveClass: testUtils.ExpectFromMatcher<"toHaveClass">;
    }
  }

  window.scrollTo = jest.fn();
  installQuasarPlugin();
  jestReset();
}

/**
 * Mocks v-touch-pan directive.
 *
 * @returns Mock.
 */
export function touchPanMock(): TouchPanMock {
  let touchPanValue: unknown;

  const touchPan: Directive = {
    created(_el, binding) {
      touchPanValue = binding.value;
    }
  };

  return { touchPan, triggerTouchPan };

  function triggerTouchPan(...args: unknown[]): void {
    assert.callable(touchPanValue);
    touchPanValue(...args);
  }
}

/**
 * Checks if value is a wrapper.
 *
 * @param value - Value.
 * @returns _True_ if value is a wrapper, _false_ otherwise.
 */
function isWrapper(
  value: unknown
): value is vueTestUtils.DOMWrapper<Node> | vueTestUtils.VueWrapper {
  return is.indexedObject(value) && is.callable(value["exists"]);
}
