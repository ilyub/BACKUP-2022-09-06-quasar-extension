import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";

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

export interface PageLayoutSettings {
  readonly closeButton: boolean;
  readonly headerHeight: string;
  readonly paddingX: string;
  readonly paddingY: string;
  readonly sectionMargin: string;
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
    paddingY: "15px",
    sectionMargin: "20px"
  };
});
