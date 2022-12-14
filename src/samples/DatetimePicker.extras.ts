import { lang as baseLang } from "@skylib/facades";

export namespace DatetimePicker {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Date: true;
    readonly Disabled: true;
    readonly EvenSecondsForError: true;
    readonly Invalid: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly Submit: true;
    readonly ValidateOnChange: true;
    readonly ValidateOnInput: true;
    readonly ValidateOnSubmit: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends DatetimePicker.Word {}
    }
  }
}
