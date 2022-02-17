import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { ReadonlyRecord, stringU } from "@skylib/functions/es/types/core";

import type { RootElementProps } from "./api/rootElement";

export interface GroupItem<T extends string = string> {
  readonly id: T;
  readonly show: boolean;
  readonly title: string;
}

export type GroupItems<T extends string = string> = ReadonlyArray<GroupItem<T>>;

export type GlobalGroup<T extends string = string> = GlobalComponentConstructor<
  GroupProps<T>,
  GroupSlots<T>
>;

export interface GroupParentProps {}

export interface GroupOwnProps<T extends string = string>
  extends RootElementProps {
  readonly items: GroupItems<T>;
  readonly notFoundLabel?: stringU;
  readonly searchString?: stringU;
}

export interface GroupProps<T extends string = string>
  extends GroupParentProps,
    GroupOwnProps<T> {}

export type GroupSlots<T extends string = string> = ReadonlyRecord<
  T,
  () => readonly VNode[]
>;

export const isGroupItem: is.Guard<GroupItem> = is.factory(
  is.object.of,
  { id: is.string, show: is.boolean, title: is.string },
  {}
);

export const isGroupItems = is.factory(is.array.of, isGroupItem);
