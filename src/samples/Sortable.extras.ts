import { lang as baseLang } from "@skylib/facades";

export namespace Sortable {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly DisableDropping: true;
    readonly DisableSorting: true;
    readonly SampleTooltip: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Sortable.Word {}
    }
  }
}
