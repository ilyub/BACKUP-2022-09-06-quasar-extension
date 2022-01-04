export type Align = "center" | "left" | "right";

export interface Column<T> {
  readonly align: Align;
  /**
   * Returns field.
   *
   * @param row - Row.
   * @returns Field.
   */
  readonly field: (row: T) => string;
  readonly label: string;
  readonly name: string;
  readonly sortable?: true;
}

export type Columns<T> = ReadonlyArray<Column<T>>;
