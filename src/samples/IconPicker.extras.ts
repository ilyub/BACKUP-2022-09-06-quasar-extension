import { lang as baseLang } from "@skylib/facades";

export namespace IconPicker {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly CompactSize: true;
    readonly ShowTooltips: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends IconPicker.Word {}
    }
  }
}
