import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Switchable.Word {}
    }
  }
}

export namespace Switchable {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Disable: true;
    readonly None: true;
    readonly SampleKnob: true;
    readonly SampleToggle: true;
    readonly Slide: true;
    readonly Transition: true;
  }
}
