import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends IconPicker.Word {}
    }
  }
}

export namespace IconPicker {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Compact: true;
    readonly Tooltips: true;
  }
}
