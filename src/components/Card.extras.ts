import type { QCardProps } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { stringU } from "@skylib/functions/es/types/core";

import type { ExtendQuasarProps, PropOptions, PropOptionsBoolean } from "./api";

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

export type CardProps = ExtendQuasarProps<
  QCardProps,
  {
    readonly minWidth: PropOptions<stringU>;
    readonly title: PropOptions<stringU>;
    readonly transparentHeader: PropOptionsBoolean;
  }
>;
