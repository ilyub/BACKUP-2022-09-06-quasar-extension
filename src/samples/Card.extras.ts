import { lang as baseLang } from "@skylib/facades";

export namespace Card {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Reset: true;
    readonly Section: true;
    readonly Submit: true;
    readonly Title: true;
    readonly WithTitle: true;
    readonly WithTransparentTitle: true;
    readonly WithoutTitle: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Card.Word {}
    }
  }
}
