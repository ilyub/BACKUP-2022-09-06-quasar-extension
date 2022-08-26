import type { GlobalComponent, VNodes } from "./api";
import type {
  booleanU,
  numberU,
  objectU,
  stringU,
  types,
  unknowns
} from "@skylib/functions";
import { computed } from "vue";
import { injectableSettings } from "./api";

export namespace Sortable {
  export const defaultSettings = computed(
    (): Settings => ({
      animationDuration: 500,
      disableDropping: false,
      disableSorting: false
    })
  );

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(defaultSettings);

  export namespace VueDraggable {
    // eslint-disable-next-line @skylib/typescript/no-shadow -- Ok
    export interface ItemSlotData {
      readonly element: VueDraggableElement;
    }

    // eslint-disable-next-line @skylib/typescript/no-shadow -- Ok
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

    // eslint-disable-next-line @skylib/typescript/no-shadow -- Ok
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
    extends Omit<VueDraggable.Props, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<VueDraggable.Slots, keyof OwnSlots> {}

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
}
