import type { LocaleName, Rec } from "@skylib/functions";
import { en } from "./en";
import type { implementations } from "@skylib/framework";
import { ru } from "./ru";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly "en-GB": true;
      readonly "en-US": true;
      readonly "ru-RU": true;
    }
  }

  namespace facades {
    namespace lang {
      interface Word {
        readonly EnglishUK: true;
        readonly EnglishUSA: true;
        readonly Russian: true;
      }
    }
  }
}

export const definitions: Rec<
  LocaleName,
  implementations.lang.dictionary.Definitions
> = {
  "en-GB": en,
  "en-US": en,
  "ru-RU": ru
};
