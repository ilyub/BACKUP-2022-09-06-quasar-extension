import type { GlobalComponent, VNodes } from "./api";
import type {
  booleanU,
  numberU,
  objectU,
  stringU,
  types,
  unknowns
} from "@skylib/functions";
// eslint-disable-next-line @skylib/consistent-import -- Ok
import BaseVueDraggable from "vuedraggable";

export const VueDraggable = BaseVueDraggable as unknown as GlobalComponent<
  VueDraggable.Props,
  VueDraggable.Slots
>;

// eslint-disable-next-line @typescript-eslint/no-redeclare -- Ok
export namespace VueDraggable {
  export interface Element {
    readonly group: string;
    readonly id: string;
    readonly item: object;
  }

  export interface ItemSlotData {
    readonly element: Element;
  }

  export interface Props {
    readonly animation?: numberU;
    readonly dataGroup?: stringU;
    readonly disabled?: booleanU;
    readonly ghostClass?: stringU;
    readonly group?: objectU;
    readonly itemKey?: stringU;
    readonly modelValue?: unknowns | undefined;
    readonly move?: types.fn.Callable | undefined;
    readonly sort?: booleanU;
    readonly tag?: stringU;
  }

  export interface Slots {
    /**
     * Footer slot.
     *
     * @returns Nodes.
     */
    readonly footer: () => VNodes;
    /**
     *Header slot.
     *
     * @returns Nodes.
     */
    readonly header: () => VNodes;
    /**
     * Item slot.
     *
     * @param data - Data.
     * @returns Nodes.
     */
    readonly item: (data: ItemSlotData) => VNodes;
  }
}
