import { lang as baseLang } from "@skylib/facades";

export namespace Group {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly NoResultsFound: true;
    readonly SearchForSettings: true;
    readonly Show: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Group.Word {}
    }
  }
}
