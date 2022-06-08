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
  readonly Color: true;
  readonly Date: true;
  readonly Disabled: true;
  readonly Number: true;
  readonly Password: true;
  readonly SelectColor: true;
  readonly String: true;
  readonly Time: true;
}
