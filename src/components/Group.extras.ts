import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";

import type {
  ExtendPropOptions,
  PropOptions,
  PropOptionsRequired
} from "./api";
import type { RootElementProps } from "./api/rootElement";

export interface GroupItem {
  readonly id: string;
  readonly show: boolean;
  readonly title: string;
}

export type GroupItems = readonly GroupItem[];

export const isGroupItem: is.Guard<GroupItem> = is.factory(
  is.object.of,
  { id: is.string, show: is.boolean, title: is.string },
  {}
);

export const isGroupItems = is.factory(is.array.of, isGroupItem);

export type GroupPropOptions = ExtendPropOptions<
  {
    readonly items: PropOptionsRequired<GroupItems>;
    readonly notFoundLabel: PropOptions<stringU>;
    readonly searchString: PropOptions<stringU>;
  },
  RootElementProps
>;
