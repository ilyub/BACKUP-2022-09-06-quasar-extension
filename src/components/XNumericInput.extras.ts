import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";

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

export const icons: Icons<"chevronLeftCircle" | "chevronRightCircle"> =
  baseIcons;
