import type { Directive } from "vue";
import { computed } from "vue";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";

import { reactiveStorage } from "@skylib/facades/es/reactiveStorage";
import * as assert from "@skylib/functions/es/assertions";

import { components } from "../components";
import type { LanguagePickerSettings } from "../components/LanguagePicker.extras";
import { injectLanguagePickerSettings } from "../components/LanguagePicker.extras";
import type { TooltipSettings } from "../components/Tooltip.extras";
import { injectTooltipSettings } from "../components/Tooltip.extras";
import * as vueStorage from "../facade-implementations/reactiveStorage/vueStorage";

export interface CustomGlobalMountOptions {
  readonly languagePickerSettings?: LanguagePickerSettings;
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

/**
 * Returns global mount options.
 *
 * @param options - Options.
 * @returns Global mount options.
 */
export function globalMountOptions(
  options: CustomGlobalMountOptions = {}
  // eslint-disable-next-line @skylib/no-mutable-signature
): GlobalMountOptions {
  const languagePickerSettings = options.languagePickerSettings ?? {
    changeLanguageAction(): void {
      // Do nothing
    },
    items: []
  };

  const tooltipSettings = options.tooltipSettings ?? {
    delay: 1000,
    show: true
  };

  return {
    components,
    provide: {
      [injectLanguagePickerSettings as symbol]:
        computed<LanguagePickerSettings>(() => languagePickerSettings),
      [injectTooltipSettings as symbol]: tooltipSettings
    }
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
  installQuasarPlugin();
  jestReset();
}

/**
 * Mocks v-touch-pan directive.
 *
 * @returns Mock.
 */
export function mockTouchPan(): TouchPanMock {
  function triggerTouchPan(...args: unknown[]): void {
    assert.callable(touchPanValue);
    touchPanValue(...args);
  }

  let touchPanValue: unknown = undefined;

  const touchPan: Directive = {
    created(_el, binding) {
      touchPanValue = binding.value;
    }
  };

  return { touchPan, triggerTouchPan };
}
