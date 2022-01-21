import type { ComputedRef } from "vue";
import { computed, inject } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import * as is from "@skylib/functions/es/guards";
import type { numberU } from "@skylib/functions/es/types/core";

import type { ComputedInjectionKey } from "./api";
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

export type InjectPageLayoutSettings = ComputedInjectionKey<PageLayoutSettings>;

export interface PageLayoutSettings {
  readonly closeButton: boolean;
  readonly headerHeight: string;
  readonly paddingX: string;
  readonly paddingY: string;
  readonly sectionMargin: string;
}

export const icons: Icons<"close"> = baseIcons;

export const injectPageLayoutSettings: InjectPageLayoutSettings =
  Symbol("PageLayoutSettings");

/**
 * Returns default settings.
 *
 * @returns Default settings.
 */
export function defaultPageLayoutSettings(): PageLayoutSettings {
  return {
    closeButton: true,
    headerHeight: "60px",
    paddingX: "15px",
    paddingY: "15px",
    sectionMargin: "20px"
  };
}

/**
 * Page content height module.
 *
 * @param extraPageOffset - Extra page offset.
 * @returns Page content height.
 */
export function usePageContentHeight(
  extraPageOffset: () => string
): ComputedRef<string> {
  const pageLayoutSettings = inject(
    injectPageLayoutSettings,
    computed<PageLayoutSettings>(defaultPageLayoutSettings)
  );

  const pageOffset = inject(
    injectPageOffset,
    computed<numberU>(() => undefined)
  );

  return computed<string>(() => {
    if (is.not.empty(pageOffset.value)) {
      const po = pageOffset.value;

      const hh = pageLayoutSettings.value.headerHeight;

      const py = pageLayoutSettings.value.paddingY;

      const epo = extraPageOffset();

      return `calc(100vh - ${po}px - ${hh} - 2 * ${py} - ${epo})`;
    }

    return "auto";
  });
}
