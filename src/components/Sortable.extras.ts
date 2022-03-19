import type { VNode } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as json from "@skylib/functions/es/json";
import * as reflect from "@skylib/functions/es/reflect";
import type { objects, stringU } from "@skylib/functions/es/types/core";

import type { GlobalComponent } from "./api";
import { createInjectable } from "./api";

export interface Elem {
  readonly elementId: string;
  readonly group: string;
  readonly id: string;
  readonly item: object;
}

export type Elems = readonly Elem[];

export type GlobalSortable<T extends object = object> = GlobalComponent<
  SortableProps<T>,
  SortableSlots<T>
>;

export interface ItemSlotData<T extends object = object> {
  readonly item: T;
}

export interface Move {
  /**
   * Determines whether dragged item can be dropped.
   *
   * @param destId - Dest ID.
   * @param destGroup - Dest group.
   * @param sourceId - Source ID.
   * @param sourceGroup - Source group.
   * @returns _True_ if dragged item can be dropped, _false_ otherwise.
   */
  (
    destId: stringU,
    destGroup: string,
    sourceId: string,
    sourceGroup: string
  ): boolean;
}

export interface MoveData {
  readonly dragged: HTMLElement;
  readonly related: HTMLElement;
}

export interface ItemAttrsFn<T extends object = object> {
  /**
   * Returns component data.
   *
   * @param item - Item.
   * @returns Data.
   */
  (item: T): object;
}

export type ItemAttrs<T extends object = object> = ItemAttrsFn<T> | object;

export const isItemAttrsFn: is.Guard<(item: object) => object> = is.callable;

export const isItemAttrs = is.or.factory(isItemAttrsFn, is.object);

export const isItemAttrsU = is.or.factory(isItemAttrs, is.undefined);

export interface ItemClickEvent<T extends object = object> {
  /**
   * Click event.
   *
   * @param item - Item.
   */
  (item: T): void;
}

export interface ItemClassFn<T extends object = object> {
  /**
   * Class.
   *
   * @param item - Item.
   */
  (item: T): void;
}

export const isItemClickEvent: is.Guard<ItemClickEvent> = is.callable;

export const isItemClickEventU = is.or.factory(isItemClickEvent, is.undefined);

export const isItemClassFn: is.Guard<ItemClassFn> = is.callable;

export const isItemClassFnU = is.or.factory(isItemClickEvent, is.undefined);

export interface SortableProps<T extends object = object> {
  readonly group: string;
  readonly itemClass?: stringU;
  readonly itemClassFn?: ItemClassFn<T> | undefined;
  readonly itemKey: string;
  readonly itemTag?: unknown;
  readonly modelValue: readonly T[];
  readonly move?: Move | undefined;
  /**
   * Emits "dropped" event.
   *
   * @param item - Item.
   * @param group - Group.
   */
  readonly onDropped?: ((item: object, group: string) => void) | undefined;
  readonly onItemClick?: ItemClickEvent<T> | undefined;
  /**
   * Emits model value.
   *
   * @param value - Value.
   */
  readonly "onUpdate:modelValue"?: ((value: readonly T[]) => void) | undefined;
}

export interface SortableSlots<T extends object = object> {
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
  readonly item: (data: ItemSlotData<T>) => readonly VNode[];
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
  items: objects,
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
