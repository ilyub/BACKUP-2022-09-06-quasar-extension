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
    readonly Color: true;
    readonly Reset: true;
    readonly ResetValidation: true;
    readonly Submit: true;
    readonly Submitted: true;
  }
}
