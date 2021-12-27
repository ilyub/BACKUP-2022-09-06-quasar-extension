import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as json from "@skylib/functions/es/json";
import type {
  ReadonlyIndexedObject,
  stringU
} from "@skylib/functions/es/types/core";

import type { ComputedInjectionKey } from "./api";

export interface Elem {
  readonly elementId: string;
  readonly group: stringU;
  readonly id: string;
  readonly item: ReadonlyIndexedObject;
}

export type Elems = readonly Elem[];

export type InjectSortableSettings = ComputedInjectionKey<SortableSettings>;

export type Move = (
  destId: stringU,
  destGroup: string,
  sourceId: string,
  sourceGroup: string
) => boolean;

export interface MoveData {
  readonly dragged: HTMLElement;
  readonly related: HTMLElement;
}

export interface SortableSettings {
  readonly animationDuration: number;
}

export const injectSortableSettings: InjectSortableSettings =
  Symbol("SortableSettings");

export const isElem: is.Guard<Elem> = is.factory(
  is.object.of,
  {
    elementId: is.string,
    group: is.stringU,
    id: is.string,
    item: is.indexedObject
  },
  {}
);

export const isElems = is.factory(is.array.of, isElem);

export const isHtmlElement = is.factory(is.instance, HTMLElement);

export const isMove: is.Guard<Move> = is.callable;

export const isMoveU = is.or.factory(isMove, is.undefined);

export const isMoveData: is.Guard<MoveData> = is.factory(
  is.object.of,
  {
    dragged: isHtmlElement,
    related: isHtmlElement
  },
  {}
);

/**
 * Builds vuedraggable elements.
 *
 * @param items - Items.
 * @param group - Group.
 * @param key - Key.
 * @returns Elements.
 */
export function buildElements(
  items: readonly ReadonlyIndexedObject[],
  group: string,
  key: string
): Elems {
  return items.map(item => {
    const id = item[key];

    assert.string(id);

    return {
      elementId: json.encode([id, group]),
      group,
      id,
      item
    };
  });
}

/**
 * Returns default settings.
 *
 * @returns Default settings.
 */
export function defaultSortableSettings(): SortableSettings {
  return {
    animationDuration: 500
  };
}
