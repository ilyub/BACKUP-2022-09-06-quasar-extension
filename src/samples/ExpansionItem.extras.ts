import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ExpansionItem.Word {}
    }
  }
}

export namespace ExpansionItem {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Label: true;
  }
}
