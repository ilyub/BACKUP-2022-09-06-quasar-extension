import { injectableSettings } from "./api";
import { icons as baseIcons, lang as baseLang } from "@skylib/facades";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU, objects, stringU } from "@skylib/functions";
import type { QTable, QTableProps, QTableSlots } from "quasar";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends Table.Icon {}
    }

    namespace lang {
      interface Word extends Table.Word {}
    }
  }
}

export namespace Table {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const defaultSettings: Settings = {
    binaryStateSort: false,
    flat: false,
    growPageBy: 10,
    headerSeparator: false,
    square: false
  };

  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export type Align = "center" | "left" | "right";

  export interface BodyCellSlotData<T extends object = object>
    extends MultiSelectData {
    readonly column: Column<T>;
    readonly row: T;
  }

  export interface BodySlotData<T extends object = object>
    extends MultiSelectData {
    readonly row: T;
  }

  export interface Column<T extends object = object> {
    readonly align: Align;
    /**
     * Returns formatted field.
     *
     * @param row - Row.
     * @returns Formatted field.
     */
    readonly field: (row: T) => string;
    readonly label: string;
    readonly maxWidth?: number;
    readonly minWidth?: number;
    readonly name: string;
    /**
     * Sort callback.
     *
     * @param value1 - Value 1.
     * @param value2 - Value 2.
     * @param row1 - Row 1.
     * @param row2 - Row 2.
     * @returns Comparison result.
     */
    readonly sort?: (
      value1: string,
      value2: string,
      row1: T,
      row2: T
    ) => number;
    readonly sortOrder?: "ad" | "da";
    readonly sortable?: true;
    readonly width?: number;
  }

  export type ColumnWidths = ReadonlyMap<string, number>;

  export type Columns<T extends object = object> = ReadonlyArray<Column<T>>;

  export type ColumnsOrder = ReadonlyMap<string, number>;

  export interface Global<T extends object = object>
    extends GlobalComponent<Props<T>, Slots<T>> {
    readonly main: QTable;
  }

  export interface HeaderCellSlotData<T extends object = object>
    extends MultiSelectData {
    readonly column: Column<T>;
  }

  export type HiddenColumns = ReadonlySet<string>;

  export interface Icon {
    readonly ascending: true;
    readonly descending: true;
    readonly deselectAll: true;
    readonly manageColumns: true;
    readonly selectAll: true;
  }

  export interface MultiSelectData {
    // eslint-disable-next-line @skylib/optional-property-style -- Ok
    readonly allSelected: booleanU;
    /**
     * Deselects all.
     */
    readonly deselectAll: () => void;
    readonly deselectAllDisable: boolean;
    readonly deselectAllIcon: string;
    readonly deselectAllLabel: string;
    /**
     * Selects all.
     */
    readonly selectAll: () => void;
    readonly selectAllDisable: boolean;
    readonly selectAllIcon: string;
    readonly selectAllLabel: string;
    /**
     * Toggles selection.
     */
    readonly toggleSelection: () => void;
    readonly toggleSelectionDisable: boolean;
    readonly toggleSelectionIcon: string;
    readonly toggleSelectionLabel: string;
  }

  export interface OwnProps<T extends object = object> {
    readonly binaryStateSortOff?: booleanU;
    readonly binaryStateSortOn?: booleanU;
    readonly columnWidths?: ColumnWidths | undefined;
    readonly columns?: Columns<T> | undefined;
    readonly columnsOrder?: ColumnsOrder | undefined;
    readonly externalSorting?: booleanU;
    readonly flatOff?: booleanU;
    readonly flatOn?: booleanU;
    readonly headerSeparatorOff?: booleanU;
    readonly headerSeparatorOn?: booleanU;
    readonly hiddenColumns?: HiddenColumns | undefined;
    readonly manageColumns?: booleanU;
    readonly multiSelect?: booleanU;
    /**
     * Emits column widths.
     *
     * @param value - Column widths.
     */
    readonly "onUpdate:columnWidths"?: (value: ColumnWidths) => void;
    /**
     * Emits columns order.
     *
     * @param value - Columns order.
     */
    readonly "onUpdate:columnsOrder"?: (value: ColumnsOrder) => void;
    /**
     * Emits hidden columns.
     *
     * @param value - Hidden columns.
     */
    readonly "onUpdate:hiddenColumns"?: (value: HiddenColumns) => void;
    /**
     * Emits pagination.
     *
     * @param value - Pagination.
     */
    readonly "onUpdate:pagination"?: (value: PaginationEmit) => void;
    /**
     * Emits selected.
     *
     * @param value - Selected.
     */
    readonly "onUpdate:selected"?: (value: objects) => void;
    readonly pagination?: PaginationProp | undefined;
    readonly resizableColumns?: booleanU;
    readonly rowKey?: stringU;
    readonly rows?: readonly T[] | undefined;
    readonly selectByCheckbox?: booleanU;
    readonly selectByRowClick?: booleanU;
    readonly selected?: readonly T[] | undefined;
    readonly squareOff?: booleanU;
    readonly squareOn?: booleanU;
    readonly sticky?: booleanU;
  }

  export interface OwnSlots<T extends object = object> {
    /**
     * Body cell slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "body-cell": (scope: BodyCellSlotData<T>) => VNodes;
    /**
     * Body cell context slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "body-cell-context": (scope: BodyCellSlotData<T>) => VNodes;
    /**
     * Body context.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "body-context": (scope: BodySlotData<T>) => VNodes;
    /**
     * Body selection.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "body-selection": (scope: BodySlotData<T>) => VNodes;
    /**
     * Header cell slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "header-cell": (scope: HeaderCellSlotData<T>) => VNodes;
    /**
     * Header menu append slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "header-menu-append": (scope: MultiSelectData) => VNodes;
    /**
     * Header menu prepend slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "header-menu-prepend": (scope: MultiSelectData) => VNodes;
    /**
     * Header selection slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "header-selection": (scope: MultiSelectData) => VNodes;
    /**
     * Steady bottom slot.
     *
     * @param scope - Scope.
     * @returns Nodes.
     */
    readonly "steady-bottom": (scope: MultiSelectData) => VNodes;
  }

  export interface PaginationEmit {
    readonly descending: boolean;
    readonly limit?: number;
    readonly page: number;
    readonly rowsNumber?: number;
    readonly rowsPerPage: number;
    readonly sortBy?: string;
  }

  export interface PaginationProp {
    readonly descending?: boolean;
    readonly limit?: number;
    readonly page?: number;
    readonly rowsNumber?: number;
    readonly rowsPerPage?: number;
    readonly sortBy?: string;
  }

  export interface ParentProps extends Omit<QTableProps, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<QTableSlots, keyof OwnSlots | `body-cell-${string}`> {}

  export interface Props<T extends object = object>
    extends ParentProps,
      OwnProps<T> {}

  export interface Settings {
    readonly binaryStateSort: boolean;
    readonly flat: boolean;
    readonly growPageBy: number;
    readonly headerSeparator: boolean;
    readonly square: boolean;
  }

  export interface Slots<T extends object = object>
    extends ParentSlots,
      OwnSlots<T> {}

  export interface Word {
    readonly DeselectAll: true;
    readonly ManageColumns: true;
    readonly SelectAll: true;
  }
}
