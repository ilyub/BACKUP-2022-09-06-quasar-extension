import type { ComputedRef } from "vue";
import { computed } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";
import { injectPageOffset } from "./api/injections";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly close: string;
      }
    }
  }
}

export interface PageLayoutSettings {
  readonly closeButton: boolean;
  readonly headerHeight: string;
  readonly paddingX: string;
  readonly paddingY: string;
  readonly sectionMargin: string;
}

export const icons: Icons<"close"> = baseIcons;

/**
 * Page content height module.
 *
 * @param extraPageOffset - Extra page offset.
 * @returns Page content height.
 */
export function usePageContentHeight(
  extraPageOffset: () => stringU
): ComputedRef<string> {
  const pageLayoutSettings = injectPageLayoutSettings();

  const pageOffset = injectPageOffset();

  return computed<string>(() => {
    if (is.not.empty(pageOffset.value)) {
      const po = pageOffset.value;

      const hh = pageLayoutSettings.value.headerHeight;

      const py = pageLayoutSettings.value.paddingY;

      const epo = extraPageOffset() ?? "0px";

      return `calc(100vh - ${po}px - ${hh} - 2 * ${py} - ${epo})`;
    }

    return "auto";
  });
}

export const {
  inject: injectPageLayoutSettings,
  provide: providePageLayoutSettings,
  test: testPageLayoutSettings
} = createInjectable<PageLayoutSettings>(() => {
  return {
    closeButton: true,
    headerHeight: "60px",
    paddingX: "15px",
    paddingY: "15px",
    sectionMargin: "20px"
  };
});
