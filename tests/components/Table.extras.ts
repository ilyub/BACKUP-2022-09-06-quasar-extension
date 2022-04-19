import type { booleanU, stringU } from "@skylib/functions";
import { computed } from "vue";
import { components } from "@";

test.each([
  {
    expectedModified: false,
    expectedState: {
      columnWidths: new Map(),
      columnsOrder: new Map(),
      descending: false,
      hiddenColumns: new Set(),
      sortBy: "name1"
    }
  },
  {
    descending: true,
    expectedModified: true,
    expectedState: {
      columnWidths: new Map(),
      columnsOrder: new Map(),
      descending: true,
      hiddenColumns: new Set(),
      sortBy: "name2"
    },
    sortBy: "name2"
  }
])(
  "genericTable",
  ({ descending, expectedModified, expectedState, sortBy }) => {
    const { columnWidths, columnsOrder, hiddenColumns, modified, state } =
      components.useTableState(
        computed<components.TableState>(() => {
          return {
            columnWidths: new Map(),
            columnsOrder: new Map(),
            descending: false,
            hiddenColumns: new Set(),
            sortBy: "name1"
          };
        }),
        computed<stringU>(() => sortBy),
        computed<booleanU>(() => descending)
      );

    expect(columnWidths.value).toStrictEqual(new Map());
    expect(columnsOrder.value).toStrictEqual(new Map());
    expect(hiddenColumns.value).toStrictEqual(new Set());
    expect(modified.value).toStrictEqual(expectedModified);
    expect(state.value).toStrictEqual(expectedState);
  }
);
