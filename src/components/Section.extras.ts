import type { Switchable } from "./Switchable.extras";
import type { GlobalComponent } from "./api";

export namespace Section {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: Switchable.Global;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<Switchable.Props, keyof OwnProps> {}

  export interface ParentSlots extends Omit<Switchable.Slots, keyof OwnProps> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
