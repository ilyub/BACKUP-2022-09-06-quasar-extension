import { lang as baseLang } from "@skylib/facades";

export namespace OptionGroup {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Option1: true;
    readonly Option2: true;
    readonly Option3: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends OptionGroup.Word {}
    }
  }
}
