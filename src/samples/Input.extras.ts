import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Input.Word {}
    }
  }
}

export namespace Input {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Disabled: true;
    readonly Mask: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly String: true;
    readonly Submit: true;
    readonly Submitted: true;
    readonly ValidateOnChange: true;
    readonly ValidateOnInput: true;
    readonly ValidateOnSubmit: true;
  }
}
