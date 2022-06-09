import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Card.Word {}
    }
  }
}

export namespace Card {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly NoTitle: true;
    readonly Reset: true;
    readonly Section: true;
    readonly Submit: true;
    readonly Title: true;
    readonly TransparentTitle: true;
  }
}
