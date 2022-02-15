import type { GlobalComponentConstructor, QItemProps } from "quasar";
import type { VNode } from "vue";

import type { stringU } from "@skylib/functions/es/types/core";

export type GlobalListItem = GlobalComponentConstructor<
  ListItemProps,
  ListItemSlots
>;

// eslint-disable-next-line @skylib/prefer-readonly
export type ListItemParentProps = QItemProps;

export interface ListItemOwnProps {
  readonly caption?: stringU;
  readonly icon?: stringU;
}

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
