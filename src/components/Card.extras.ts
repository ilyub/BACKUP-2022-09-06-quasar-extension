import type { QCardProps } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { stringU } from "@skylib/functions/es/types/core";

import type {
  PropOptions,
  PropOptionsBoolean,
  PropsToPropOptions
} from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly close: string;
      }
    }
  }
}

export const icons: Icons<"close"> = baseIcons;

export type CardPropOptions = PropsToPropOptions<
  QCardProps,
  {
    readonly minWidth: PropOptions<stringU>;
    readonly title: PropOptions<stringU>;
    readonly transparentHeader: PropOptionsBoolean;
  }
>;
