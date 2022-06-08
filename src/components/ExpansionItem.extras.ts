import type { GlobalComponent, plugins } from "./api";
import type {
  QExpansionItem,
  QExpansionItemProps,
  QExpansionItemSlots
} from "quasar";

export namespace ExpansionItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QExpansionItem;
  }

  export interface OwnProps extends plugins.useLabel.Props {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<QExpansionItemProps, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<QExpansionItemSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
