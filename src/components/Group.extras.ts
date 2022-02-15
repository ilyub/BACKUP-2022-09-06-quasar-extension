import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { ReadonlyRecord, stringU } from "@skylib/functions/es/types/core";

import type { RootElementProps } from "./api/rootElement";

export interface GroupItem {
  readonly id: string;
  readonly show: boolean;
  readonly title: string;
}

export type GroupItems = readonly GroupItem[];

export type GlobalGroup = GlobalComponentConstructor<GroupProps, GroupSlots>;

export interface GroupParentProps {}

export interface GroupOwnProps extends RootElementProps {
  readonly items: GroupItems;
  readonly notFoundLabel?: stringU;
  readonly searchString?: stringU;
}

export interface GroupProps extends GroupParentProps, GroupOwnProps {}

export type GroupSlots = ReadonlyRecord<string, () => readonly VNode[]>;

export const isGroupItem: is.Guard<GroupItem> = is.factory(
  is.object.of,
  { id: is.string, show: is.boolean, title: is.string },
  {}
);

export const isGroupItems = is.factory(is.array.of, isGroupItem);
