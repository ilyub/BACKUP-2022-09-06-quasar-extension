import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { booleanU, stringU } from "@skylib/functions/es/types/core";
import type { VNode } from "vue";
import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }
  }
}

export const icons: Icons<keyof ModuleIcons> = baseIcons;

export const {
  inject: injectPageLayoutSettings,
  provide: providePageLayoutSettings,
  test: testPageLayoutSettings
} = createInjectable<PageLayoutSettings>(() => {
  return { closeButton: true, height: "auto" };
});

export type GlobalPageLayout = GlobalComponent<
  PageLayoutProps,
  PageLayoutSlots
>;

export interface ModuleIcons {
  readonly close: true;
}

export interface PageLayoutProps {
  readonly closeButtonOff?: booleanU;
  readonly closeButtonOn?: booleanU;
  readonly title?: stringU;
}

export interface PageLayoutSettings {
  readonly closeButton: boolean;
  readonly height: string;
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
  /**
   * Fit slot.
   *
   * @returns Node.
   */
  readonly fit: () => readonly VNode[];
  /**
   * Footer slot.
   *
   * @returns Node.
   */
  readonly footer: () => readonly VNode[];
  /**
   * Header slot.
   *
   * @returns Node.
   */
  readonly header: () => readonly VNode[];
  /**
   * Sticky footer slot.
   *
   * @returns Node.
   */
  readonly "sticky-footer": () => readonly VNode[];
  /**
   * Sticky header slot.
   *
   * @returns Node.
   */
  readonly "sticky-header": () => readonly VNode[];
}
