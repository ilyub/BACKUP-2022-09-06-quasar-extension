import type { ComponentConstructor } from "quasar";
import type { Component, ComponentPublicInstance, Directive } from "vue";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import type * as vueTestUtils from "@vue/test-utils";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";

import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type * as testUtils from "@skylib/functions/es/testUtils";
import type { WritableRecord } from "@skylib/functions/es/types/core";

import { components } from "../components";
import type { IconPickerSettings } from "../components/IconPicker.extras";
import { testIconPickerSettings } from "../components/IconPicker.extras";
import type { LanguagePickerSettings } from "../components/LanguagePicker.extras";
import { testLanguagePickerSettings } from "../components/LanguagePicker.extras";
import type { PageLayoutSettings } from "../components/PageLayout.extras";
import { testPageLayoutSettings } from "../components/PageLayout.extras";
import type { ResizerSettings } from "../components/Resizer.extras";
import { testResizerSettings } from "../components/Resizer.extras";
import type { SortableSettings } from "../components/Sortable.extras";
import { testSortableSettings } from "../components/Sortable.extras";
import type { SwitchableSettings } from "../components/Switchable.extras";
import { testSwitchableSettings } from "../components/Switchable.extras";
import type { TableSettings } from "../components/Table.extras";
import { testTableSettings } from "../components/Table.extras";
import type { TooltipSettings } from "../components/Tooltip.extras";
import { testTooltipSettings } from "../components/Tooltip.extras";
import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";

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

export interface CustomGlobalMountOptions {
  readonly iconPickerSettings?: IconPickerSettings;
  readonly languagePickerSettings?: LanguagePickerSettings;
  readonly pageLayoutSettings?: PageLayoutSettings;
  readonly resizerSettings?: ResizerSettings;
  readonly sortableSettings?: SortableSettings;
  readonly switchableSettings?: SwitchableSettings;
  readonly tableSettings?: TableSettings;
  readonly tooltipSettings?: TooltipSettings;
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

      for (const component of components) result[component.name] = component;

      return result;
    }),
    provide: fn.run(() => {
      const result: WritableRecord<symbol, unknown> = {};

      if ("iconPickerSettings" in options)
        testIconPickerSettings(result, options.iconPickerSettings);

      if ("languagePickerSettings" in options)
        testLanguagePickerSettings(result, options.languagePickerSettings);

      if ("pageLayoutSettings" in options)
        testPageLayoutSettings(result, options.pageLayoutSettings);

      if ("tableSettings" in options)
        testTableSettings(result, options.tableSettings);

      if ("resizerSettings" in options)
        testResizerSettings(result, options.resizerSettings);

      if ("switchableSettings" in options)
        testSwitchableSettings(result, options.switchableSettings);

      if ("sortableSettings" in options)
        testSortableSettings(result, options.sortableSettings);

      if ("tooltipSettings" in options)
        testTooltipSettings(result, options.tooltipSettings);

      return result;
    })
  };
}

/**
 * Checks that Vue wrapper contains expected HTML code.
 *
 * @param got - Got value.
 * @param expected - Expected HTML code.
 * @returns Result object.
 */
export function htmlToEqual(
  got: unknown,
  expected: string
): testUtils.ExpectReturnType {
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
}

/**
 * Jest reset.
 */
export function jestReset(): void {
  reactiveStorage.setImplementation(vueStorage.implementation);
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
 * Checks that Vue wrapper contains expected text.
 *
 * @param got - Got value.
 * @param expected - Expected text.
 * @returns Result object.
 */
export function textToEqual(
  got: unknown,
  expected: string
): testUtils.ExpectReturnType {
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
}

/**
 * Checks that Vue wrapper is visible.
 *
 * @param got - Got value.
 * @returns Result object.
 */
export function toBeVisible(got: unknown): testUtils.ExpectReturnType {
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
}

/**
 * Checks that Vue wrapper exists.
 *
 * @param got - Got value.
 * @returns Result object.
 */
export function toExist(got: unknown): testUtils.ExpectReturnType {
  assert.byGuard(got, isWrapper);

  return got.exists()
    ? {
        message: (): string => "Expected Vue wrapper not to exist",
        pass: true
      }
    : { message: (): string => "Expected Vue wrapper to exist", pass: false };
}

/**
 * Checks that Vue wrapper has class.
 *
 * @param got - Got value.
 * @param expected - Expected class name.
 * @returns Result object.
 */
export function toHaveClass(
  got: unknown,
  expected: string
): testUtils.ExpectReturnType {
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
 * Checks that value is a wrapper.
 *
 * @param value - Value.
 * @returns _True_ if value is a wrapper, _false_ otherwise.
 */
function isWrapper(
  value: unknown
): value is vueTestUtils.DOMWrapper<Node> | vueTestUtils.VueWrapper {
  return is.indexedObject(value) && is.callable(value["exists"]);
}
