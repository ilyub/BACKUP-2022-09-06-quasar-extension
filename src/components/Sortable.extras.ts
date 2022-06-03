import { injectableSettings } from "./api";
import type { GlobalComponent, VNodes } from "./api";
import type {
  stringU,
  booleanU,
  numberU,
  objectU,
  unknowns
} from "@skylib/functions";

export namespace Sortable {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const defaultSettings: Settings = {
    animationDuration: 500,
    disableDropping: false,
    disableSorting: false
  };

  export interface Global<T extends object = object, D extends object = object>
    extends GlobalComponent<Props<T, D>, Slots<T>> {}

  export interface ItemSlotData<T extends object = object> {
    readonly item: T;
  }

  export interface Move {
    /**
     * Whether dragged item can be dropped.
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

  export interface OwnProps<
    T extends object = object,
    D extends object = object
  > {
    readonly group: string;
    readonly itemClass?: stringU;
    readonly itemKey: string;
    readonly itemTag?: unknown;
    readonly modelValue: readonly T[];
    readonly move?: Move | undefined;
    /**
     * Dropped event.
     *
     * @param item - Item.
     * @param group - Group.
     */
    readonly onDropped?: (item: D, group: string) => void;
    /**
     * Item click event.
     *
     * @param item - Item.
     */
    readonly onItemClick?: (item: T) => void;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: readonly T[]) => void;
    readonly pull?: booleanU;
    readonly put?: booleanU;
    readonly sort?: booleanU;
  }

  export interface OwnSlots<T extends object = object> {
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
    readonly item: (data: ItemSlotData<T>) => VNodes;
  }

  export interface ParentProps
    extends Omit<VueDraggableProps, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<VueDraggableProps, keyof OwnSlots> {}

  export interface Props<T extends object = object, D extends object = object>
    extends ParentProps,
      OwnProps<T, D> {}

  export interface Settings {
    readonly animationDuration: number;
    readonly disableDropping: boolean;
    readonly disableSorting: boolean;
  }

  export interface Slots<T extends object = object>
    extends ParentSlots,
      OwnSlots<T> {}

  export interface VueDraggableElement {
    readonly group: string;
    readonly id: string;
    readonly item: object;
  }

  export interface VueDraggableItemSlotData {
    readonly element: VueDraggableElement;
  }

  export interface VueDraggableProps {
    readonly animation?: numberU;
    readonly dataGroup?: stringU;
    readonly disabled?: booleanU;
    readonly ghostClass?: stringU;
    readonly group?: objectU;
    readonly itemKey?: stringU;
    readonly modelValue?: unknowns | undefined;
    readonly move?: Function | undefined;
    readonly sort?: booleanU;
    readonly tag?: stringU;
  }

  export interface VueDraggableSlots {
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
    readonly item: (data: VueDraggableItemSlotData) => VNodes;
  }
}
