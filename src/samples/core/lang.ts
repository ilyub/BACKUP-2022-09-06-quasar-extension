import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends SampleWord {}
    }
  }
}

export const lang: baseLang.Lang<keyof SampleWord, never> = baseLang;

// eslint-disable-next-line @skylib/primary-export-only -- Ok
export interface SampleWord {
  readonly Color: true;
  readonly Date: true;
  readonly Disabled: true;
  readonly Mask: true;
  readonly Name: true;
  readonly Number: true;
  readonly Password: true;
  readonly Placeholder: true;
  readonly SampleField: true;
  readonly SearchForSettings: true;
  readonly SelectColor: true;
  readonly String: true;
  readonly Time: true;
  readonly ValidateOnChange: true;
  readonly ValidateOnInput: true;
  readonly ValidateOnSubmit: true;
}
