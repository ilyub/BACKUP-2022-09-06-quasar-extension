import { icons as baseIcons } from "@skylib/facades/es/icons";
import type { DictionaryAndWords } from "@skylib/facades/es/lang";
import { lang as baseLang } from "@skylib/facades/es/lang";
import type { ReadonlyRecord } from "@skylib/functions/es/types/core";

declare global {
  namespace facades {
    namespace icons {
      interface Facade {
        readonly chevronLeft: string;
        readonly chevronRight: string;
        readonly close: string;
      }
    }

    namespace lang {
      interface Word {
        readonly IconPicker: true;
        readonly Of: true;
      }
    }
  }
}

export const icons: ReadonlyRecord<
  "chevronLeft" | "chevronRight" | "close",
  string
> = baseIcons;

export const lang: DictionaryAndWords<"IconPicker" | "Of"> = baseLang;
