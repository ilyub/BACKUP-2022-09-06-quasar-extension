import type { GlobalComponent, plugins } from "./api";
import type { Optional, booleanU, numberU } from "@skylib/functions";
import type { Field } from "./Field.extras";
import { icons as baseIcons } from "@skylib/facades";

export namespace NumericInput {
  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: Field.Global<numberU>;
  }

  export interface Icon {
    readonly chevronDoubleLeft: true;
    readonly chevronDoubleRight: true;
    readonly chevronLeft: true;
    readonly chevronRight: true;
  }

  export interface OwnProps {
    readonly bigStep?: numberU;
    readonly max?: numberU;
    readonly min?: numberU;
    readonly modelValue?: numberU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: numberU) => void;
    readonly required?: booleanU;
    readonly smallStep?: numberU;
    readonly validationOptions?:
      | Optional<plugins.validation.Options<numberU>>
      | undefined;
  }

  export interface ParentProps
    extends Omit<Field.Props<numberU>, keyof OwnProps> {}

  export interface ParentSlots extends Field.Slots<numberU> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots {}
}

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends NumericInput.Icon {}
    }
  }
}
