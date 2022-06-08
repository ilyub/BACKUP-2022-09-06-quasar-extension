import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends PageLayout.Word {}
    }
  }
}

export namespace PageLayout {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly CloseButton: true;
    readonly CloseButtonOff: true;
    readonly CloseButtonOn: true;
    readonly Scrollbar: true;
    readonly Title: true;
  }
}
