import { lang as baseLang } from "@skylib/facades";

export namespace ExpansionItem {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly ExpansionItem: true;
    readonly Item1: true;
    readonly Item2: true;
    readonly Subtitle: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ExpansionItem.Word {}
    }
  }
}
