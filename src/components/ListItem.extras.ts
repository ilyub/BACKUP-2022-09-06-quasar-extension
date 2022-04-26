import type { GlobalComponent, ConfirmedClickProps, VNodes } from "./api";
import type { stringU } from "@skylib/functions";
import type { QItemProps } from "quasar";

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
  readonly caption: () => VNodes;
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => VNodes;
  /**
   * Header actions.
   *
   * @returns Node.
   */
  readonly icon: () => VNodes;
}
