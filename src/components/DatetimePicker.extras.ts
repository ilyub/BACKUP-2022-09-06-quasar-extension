import type { Icons } from "@skylib/facades/es/icons";
import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly am: string;
        readonly close: string;
        readonly pickDate: string;
        readonly pickTime: string;
        readonly pm: string;
      }
    }

    namespace lang {
      interface Word {
        readonly PickDate: true;
        readonly Save: true;
      }
    }
  }
}

export const icons: Icons<"am" | "close" | "pickDate" | "pickTime" | "pm"> =
  baseIcons;

export const lang: DictionaryAndWords<"PickDate" | "Save"> = baseLang;
