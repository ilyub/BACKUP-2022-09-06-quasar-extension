import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { stringU } from "@skylib/functions/es/types/core";

import type { PropOptions, PropOptionsBoolean } from "./api";
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

export interface PageLayoutPropOptions {
  readonly closeButton: PropOptionsBoolean;
  readonly hideCloseButton: PropOptionsBoolean;
  readonly title: PropOptions<stringU>;
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
