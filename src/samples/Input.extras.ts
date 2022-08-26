import { lang as baseLang } from "@skylib/facades";

export namespace Input {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Disabled: true;
    readonly Invalid: true;
    readonly Mask: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly String: true;
    readonly StringContaingQForError: true;
    readonly Submit: true;
    readonly ValidateOnChange: true;
    readonly ValidateOnInput: true;
    readonly ValidateOnSubmit: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Input.Word {}
    }
  }
}
