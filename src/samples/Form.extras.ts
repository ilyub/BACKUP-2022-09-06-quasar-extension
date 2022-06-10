import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Form.Word {}
    }
  }
}

export namespace Form {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly AsyncSubmit: true;
    readonly Name: true;
    readonly Reset: true;
    readonly Submit: true;
    readonly Submitted: true;
  }
}
