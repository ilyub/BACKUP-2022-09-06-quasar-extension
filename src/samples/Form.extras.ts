import { lang as baseLang } from "@skylib/facades";

export namespace Form {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly AsyncSubmit: true;
    readonly Reset: true;
    readonly SampleField: true;
    readonly Submit: true;
    readonly Submitted: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Form.Word {}
    }
  }
}
