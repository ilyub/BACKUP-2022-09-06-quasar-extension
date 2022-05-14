import type { GlobalComponent } from "./api";
import type { QExpansionItemProps, QExpansionItemSlots } from "quasar";

export namespace ExpansionItem {
  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface ParentProps extends QExpansionItemProps {}

  export interface ParentSlots extends QExpansionItemSlots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
