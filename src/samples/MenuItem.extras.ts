import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends MenuItem.Word {}
    }
  }
}

export namespace MenuItem {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Click: true;
    readonly ConfirmationMessage: true;
    readonly ConfirmedClick: true;
  }
}
