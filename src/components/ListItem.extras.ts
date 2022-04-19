import type { stringU } from "@skylib/functions";
import type { QItemProps } from "quasar";
import type { VNode } from "vue";
import type { GlobalComponent, ConfirmedClickProps } from "./api";

export type GlobalListItem = GlobalComponent<ListItemProps, ListItemSlots>;

export interface ListItemOwnProps extends ConfirmedClickProps {
  readonly caption?: stringU;
  readonly icon?: stringU;
}

export type ListItemParentProps = QItemProps;

export interface ListItemProps extends ListItemParentProps, ListItemOwnProps {}

export interface ListItemSlots {
  /**
   * Title slot.
   *
   * @returns Node.
   */
  readonly caption: () => readonly VNode[];
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
  /**
   * Header actions.
   *
   * @returns Node.
   */
  readonly icon: () => readonly VNode[];
}
