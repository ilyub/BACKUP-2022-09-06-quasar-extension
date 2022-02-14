import type { QInputProps } from "quasar";

import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { numberU } from "@skylib/functions/es/types/core";

import type {
  ExtendQuasarProps,
  PropOptionsDefault,
  PropOptionsRequired
} from "./api";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly chevronLeftCircle: string;
        readonly chevronRightCircle: string;
      }
    }
  }
}

export type NumericInputProps = ExtendQuasarProps<
  QInputProps,
  {
    readonly max: PropOptionsRequired<number>;
    readonly min: PropOptionsDefault<number>;
    readonly modelValue: PropOptionsRequired<numberU>;
  }
>;

export const icons: Icons<"chevronLeftCircle" | "chevronRightCircle"> =
  baseIcons;
