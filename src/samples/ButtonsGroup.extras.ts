import { lang as baseLang } from "@skylib/facades";

export namespace ButtonsGroup {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Button1: true;
    readonly Button2: true;
    readonly Click1: true;
    readonly Click2: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ButtonsGroup.Word {}
    }
  }
}
