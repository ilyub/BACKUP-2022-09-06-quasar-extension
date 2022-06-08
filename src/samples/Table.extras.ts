import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Table.Word {}
    }
  }
}

export namespace Table {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly ManageColumns: true;
    readonly MultiSelect: true;
    readonly NoData: true;
    readonly ResizableColumns: true;
    readonly SelectByCheckbox: true;
    readonly SelectByRowClick: true;
    readonly ShortData: true;
    readonly Sticky: true;
  }
}
