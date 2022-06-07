import { icons as baseIcons } from "@skylib/facades";
import type { Field } from "./Field.extras";
import type { GlobalComponent, plugins } from "./api";
import type { booleanU, numberU } from "@skylib/functions";

declare global {
  namespace facades {
    namespace icons {
      interface Icon extends NumericInput.Icon {}
    }
  }
}

export namespace NumericInput {
  export const icons: baseIcons.Icons<keyof Icon> = baseIcons;

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Field.Global<numberU>;
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
      | plugins.useValidation.OptionsProp<numberU>
      | undefined;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<Field.Props<numberU>, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<Field.Slots<numberU>, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
