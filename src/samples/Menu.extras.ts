import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Menu.Word {}
    }
  }
}

export namespace Menu {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Item1: true;
    readonly Item2: true;
  }
}
