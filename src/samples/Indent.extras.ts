import { lang as baseLang } from "@skylib/facades";

export namespace Indent {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly WithIndent: true;
    readonly WithoutIndent: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Indent.Word {}
    }
  }
}
