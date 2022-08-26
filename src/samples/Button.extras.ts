import { lang as baseLang } from "@skylib/facades";

export namespace Button {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Click: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Button.Word {}
    }
  }
}
