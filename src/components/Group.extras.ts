import type { VNode } from "vue";

import type { Rec, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import type { RootElementProps } from "./api/rootElement";

export interface GroupItem<T extends string = string> {
  readonly id: T;
  readonly show: boolean;
  readonly title: string;
}

export type GroupItems<T extends string = string> = ReadonlyArray<GroupItem<T>>;

export type GlobalGroup<T extends string = string> = GlobalComponent<
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

export type GroupSlots<T extends string = string> = Rec<
  T,
  () => readonly VNode[]
>;
