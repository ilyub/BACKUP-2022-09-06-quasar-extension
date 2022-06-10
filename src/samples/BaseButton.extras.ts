import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends BaseButton.Word {}
    }
  }
}

export namespace BaseButton {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly AnimateAsyncClick: true;
    readonly AnimateSubmitting: true;
    readonly AsyncClick: true;
    readonly AsyncSubmit: true;
    readonly Click: true;
    readonly ConfirmationMessage: true;
    readonly ConfirmedClick: true;
    readonly Down: true;
    readonly Left: true;
    readonly Name: true;
    readonly Reset: true;
    readonly Right: true;
    readonly Submitted: true;
    readonly Up: true;
  }
}
