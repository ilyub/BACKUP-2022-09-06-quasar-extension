import { lang as baseLang } from "@skylib/facades";

export namespace Item {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Item1: true;
    readonly Item2: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Item.Word {}
    }
  }
}
