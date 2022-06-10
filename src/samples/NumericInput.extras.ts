import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends NumericInput.Word {}
    }
  }
}

export namespace NumericInput {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Disabled: true;
    readonly Invalid: true;
    readonly Number: true;
    readonly OddNumberForError: true;
    readonly Placeholder: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly Submit: true;
    readonly Submitted: true;
    readonly ValidateOnChange: true;
    readonly ValidateOnInput: true;
    readonly ValidateOnSubmit: true;
  }
}
