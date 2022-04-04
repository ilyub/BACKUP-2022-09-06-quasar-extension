import type { Definitions } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import type { LocaleName } from "@skylib/functions/es/types/configurable";
import type { Rec } from "@skylib/functions/es/types/core";

import { en } from "./en";
import { ru } from "./ru";

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

export interface ModuleWord {
  readonly SampleWord: true;
}

export const definitions: Rec<LocaleName, Definitions> = {
  "en-US": en,
  "ru-RU": ru
};
