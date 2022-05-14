import { is, json, o } from "@skylib/functions";
import type { objects, Writable } from "@skylib/functions";

export const isHtmlElement = is.factory(is.instance, HTMLElement);

export const isMoveData = is.object.factory<MoveData>(
  { dragged: isHtmlElement, related: isHtmlElement },
  {}
);

export const isElement = is.object.factory<Element>(
  {
    elementId: is.string,
    group: is.string,
    id: is.string,
    item: is.object
  },
  {}
);

export const isElements = is.factory(is.array.of, isElement);

export interface Element {
  readonly elementId: string;
  readonly group: string;
  readonly id: string;
  readonly item: object;
}

export type Elements = readonly Element[];

export interface MoveData {
  readonly dragged: HTMLElement;
  readonly related: HTMLElement;
}

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
): Writable<Elements> {
  return items.map(item => {
    const id = o.get(item, key, is.string);

    return {
      elementId: json.encode([id, group]),
      group,
      id,
      item
    };
  });
}
