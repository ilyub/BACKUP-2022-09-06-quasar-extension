import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";

import type { ComputedInjectionKey } from "./api";

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
