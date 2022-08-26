import { lang as baseLang } from "@skylib/facades";

export namespace CardActions {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Reset: true;
    readonly Section: true;
    readonly Submit: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends CardActions.Word {}
    }
  }
}
