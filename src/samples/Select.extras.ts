import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Select.Word {}
    }
  }
}

export namespace Select {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Blue: true;
    readonly Color: true;
    readonly Disabled: true;
    readonly Green: true;
    readonly Invalid: true;
    readonly Red: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly Submit: true;
    readonly Submitted: true;
    readonly ValidateOnChange: true;
    readonly ValidateOnInput: true;
    readonly ValidateOnSubmit: true;
  }
}
