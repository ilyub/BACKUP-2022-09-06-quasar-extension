import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends SampleWord {}
    }
  }
}

export const lang: baseLang.Lang<keyof SampleWord, never> = baseLang;

interface SampleWord {
  readonly Date: true;
  readonly Number: true;
  readonly Password: true;
  readonly String: true;
  readonly Time: true;
}
