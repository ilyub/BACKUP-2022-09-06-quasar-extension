import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as json from "@skylib/functions/es/json";
import * as reflect from "@skylib/functions/es/reflect";
import type { objectU, stringU } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";

export interface Elem {
  readonly elementId: string;
  readonly group: string;
  readonly id: string;
  readonly item: object;
}

export type Elems = readonly Elem[];

export type GlobalSortable = GlobalComponentConstructor<
  SortableProps,
  SortableSlots
>;

export interface ItemSlotData {
  readonly item: object;
}

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

export interface SortableProps {
  readonly group: string;
  readonly itemComponentData?: objectU;
  readonly itemKey: string;
  readonly itemTag?: unknown;
  readonly modelValue: readonly object[];
  readonly move?: Move | undefined;
}

export interface SortableSlots {
  /**
   * Footer slot.
   *
   * @returns Node.
   */
  readonly footer: () => readonly VNode[];
  /**
   *Header slot.
   *
   * @returns Node.
   */
  readonly header: () => readonly VNode[];
  /**
   * Item slot.
   *
   * @param data - Data.
   * @returns Node.
   */
  readonly item: (data: ItemSlotData) => readonly VNode[];
}

export interface SortableSettings {
  readonly animationDuration: number;
}

export const isElem: is.Guard<Elem> = is.factory(
  is.object.of,
  {
    elementId: is.string,
    group: is.string,
    id: is.string,
    item: is.object
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

export const {
  inject: injectSortableSettings,
  provide: provideSortableSettings,
  test: testSortableSettings
} = createInjectable<SortableSettings>(() => {
  return {
    animationDuration: 500
  };
});

/**
 * Builds vuedraggable elements.
 *
 * @param items - Items.
 * @param group - Group.
 * @param key - Key.
 * @returns Elements.
 */
export function buildElements(
  items: readonly object[],
  group: string,
  key: string
): Elems {
  return items.map(item => {
    const id = reflect.get(item, key);

    assert.string(id);

    return {
      elementId: json.encode([id, group]),
      group,
      id,
      item
    };
  });
}
