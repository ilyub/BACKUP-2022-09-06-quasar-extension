import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Group.Word {}
    }
  }
}

export namespace Group {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly SearchForSettings: true;
  }
}
