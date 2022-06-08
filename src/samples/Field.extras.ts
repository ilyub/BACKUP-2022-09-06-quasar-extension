import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Field.Word {}
    }
  }
}

export namespace Field {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly SampleField: true;
  }
}
