import { createInjectable } from "./api";
import { icons as baseIcons } from "@skylib/facades";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU, stringU } from "@skylib/functions";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends ModuleIcons {}
    }
  }
}

export const icons: baseIcons.Icons<keyof ModuleIcons> = baseIcons;

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
  readonly actions: () => VNodes;
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => VNodes;
  /**
   * Fit slot.
   *
   * @returns Node.
   */
  readonly fit: () => VNodes;
  /**
   * Footer slot.
   *
   * @returns Node.
   */
  readonly footer: () => VNodes;
  /**
   * Header slot.
   *
   * @returns Node.
   */
  readonly header: () => VNodes;
  /**
   * Sticky footer slot.
   *
   * @returns Node.
   */
  readonly "sticky-footer": () => VNodes;
  /**
   * Sticky header slot.
   *
   * @returns Node.
   */
  readonly "sticky-header": () => VNodes;
}
