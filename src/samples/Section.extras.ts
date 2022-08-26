import { lang as baseLang } from "@skylib/facades";

export namespace Section {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Content: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Section.Word {}
    }
  }
}
