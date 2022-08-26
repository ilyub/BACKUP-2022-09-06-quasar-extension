import { lang as baseLang } from "@skylib/facades";

export namespace TimeInput {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Disabled: true;
    readonly Invalid: true;
    readonly OddNumberForError: true;
    readonly Placeholder: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly Submit: true;
    readonly Time: true;
    readonly ValidateOnChange: true;
    readonly ValidateOnInput: true;
    readonly ValidateOnSubmit: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends TimeInput.Word {}
    }
  }
}
