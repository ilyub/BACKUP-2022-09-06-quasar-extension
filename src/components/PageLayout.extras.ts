import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { booleanU, stringU } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly close: string;
      }
    }
  }
}

export type GlobalPageLayout = GlobalComponentConstructor<
  PageLayoutProps,
  PageLayoutSlots
>;

export interface PageLayoutProps {
  readonly closeButton?: booleanU;
  readonly hideCloseButton?: booleanU;
  readonly title?: stringU;
}

export interface PageLayoutSlots {
  /**
   * Actions slot.
   *
   * @returns Node.
   */
  readonly actions: () => readonly VNode[];
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}

export interface PageLayoutSettings {
  readonly closeButton: boolean;
  readonly headerHeight: string;
  readonly paddingX: string;
  readonly paddingY: string;
}

export const icons: Icons<"close"> = baseIcons;

export const {
  inject: injectPageLayoutSettings,
  provide: providePageLayoutSettings,
  test: testPageLayoutSettings
} = createInjectable<PageLayoutSettings>(() => {
  return {
    closeButton: true,
    headerHeight: "60px",
    paddingX: "15px",
    paddingY: "15px"
  };
});
