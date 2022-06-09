import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends CardSection.Word {}
    }
  }
}

export namespace CardSection {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Reset: true;
    readonly Section: true;
    readonly Submit: true;
  }
}
