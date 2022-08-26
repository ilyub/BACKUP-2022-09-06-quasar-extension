import { lang as baseLang } from "@skylib/facades";

export namespace Table {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly Column1: true;
    readonly Column2: true;
    readonly ManageColumns: true;
    readonly MultiSelect: true;
    readonly NoData: true;
    readonly OutOf: true;
    readonly ResizableColumns: true;
    readonly SelectByCheckbox: true;
    readonly SelectByRowClick: true;
    readonly Selected: true;
    readonly ShortData: true;
    readonly Sticky: true;
    readonly Title: true;
  }
}

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Table.Word {}
    }
  }
}
