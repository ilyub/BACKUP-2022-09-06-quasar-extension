import type { ComputedRef, InjectionKey } from "vue";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly close: string;
      }
    }
  }
}

export type InjectPageLayoutSettings = InjectionKey<
  ComputedRef<PageLayoutSettings>
>;

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
