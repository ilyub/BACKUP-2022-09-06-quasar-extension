import { en } from "./en";
import { ru } from "./ru";
import type { implementations } from "@skylib/framework";
import type { LocaleName, Rec } from "@skylib/functions";

declare global {
  namespace configurable {
    interface LocaleName {
      readonly "en-US": true;
      readonly "ru-RU": true;
    }
  }

  namespace facades {
    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

export const definitions: Rec<
  LocaleName,
  implementations.lang.dictionary.Definitions
> = { "en-US": en, "ru-RU": ru };

export interface ModuleWord {
  readonly SampleWord: true;
}
