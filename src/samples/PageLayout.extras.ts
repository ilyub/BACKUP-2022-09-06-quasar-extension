import { lang as baseLang } from "@skylib/facades";

export namespace PageLayout {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly CloseButton: true;
    readonly CloseButtonOff: true;
    readonly CloseButtonOn: true;
    readonly End: true;
    readonly Footer: true;
    readonly Header: true;
    readonly Scrollbar: true;
    readonly Start: true;
    readonly StickyFooter: true;
    readonly StickyHeader: true;
    readonly Title: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends PageLayout.Word {}
    }
  }
}
