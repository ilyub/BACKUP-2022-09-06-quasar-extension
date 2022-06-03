import type { GlobalComponent } from "./api";
import type {
  QExpansionItem,
  QExpansionItemProps,
  QExpansionItemSlots
} from "quasar";

export namespace ExpansionItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QExpansionItem;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<QExpansionItemProps, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<QExpansionItemSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
