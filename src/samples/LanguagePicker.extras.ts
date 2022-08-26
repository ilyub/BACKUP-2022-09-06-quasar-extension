import { lang as baseLang } from "@skylib/facades";

export namespace LanguagePicker {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly SampleWord: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends LanguagePicker.Word {}
    }
  }
}
