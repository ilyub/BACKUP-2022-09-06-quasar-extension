import type {
  GlobalComponentConstructor,
  QMarkupTableProps,
  QMarkupTableSlots
} from "quasar";

import type { stringU } from "@skylib/functions/es/types/core";

export type GlobalPageMarkupTable = GlobalComponentConstructor<
  PageMarkupTableProps,
  PageMarkupTableSlots
>;

export type PageMarkupTableParentProps = QMarkupTableProps;

export interface PageMarkupTableOwnerProps {
  readonly extraPageOffset?: stringU;
}

export interface PageMarkupTableProps
  extends PageMarkupTableParentProps,
    PageMarkupTableOwnerProps {}

export type PageMarkupTableSlots = QMarkupTableSlots;
