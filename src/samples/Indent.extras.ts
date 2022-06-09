import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Indent.Word {}
    }
  }
}

export namespace Indent {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Inner: true;
    readonly Outer: true;
  }
}
