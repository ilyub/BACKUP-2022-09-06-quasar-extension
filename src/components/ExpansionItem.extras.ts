import type { GlobalComponent } from "./api";
import type { QExpansionItemProps, QExpansionItemSlots } from "quasar";

export interface ExpansionItemOwnProps {}

export interface ExpansionItemParentProps extends QExpansionItemProps {}

export interface ExpansionItemProps
  extends ExpansionItemParentProps,
    ExpansionItemOwnProps {}

export type ExpansionItemSlots = QExpansionItemSlots;

export type GlobalExpansionItem = GlobalComponent<
  ExpansionItemProps,
  ExpansionItemSlots
>;
