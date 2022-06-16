import type { GlobalComponent, plugins } from "./api";
import type {
  QExpansionItem,
  QExpansionItemProps,
  QExpansionItemSlots
} from "quasar";

export namespace ExpansionItem {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QExpansionItem;
  }

  export interface ParentProps
    extends Omit<QExpansionItemProps, keyof PluginProps> {}

  export interface ParentSlots extends QExpansionItemSlots {}

  export interface PluginProps extends plugins.langProps.Props<"label"> {}

  export interface Props extends ParentProps, PluginProps {}

  export interface Slots extends ParentSlots {}
}
