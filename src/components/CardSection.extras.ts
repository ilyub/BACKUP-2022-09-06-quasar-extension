import type { GlobalComponent } from "./api";
import type {
  QCardSection,
  QCardSectionProps,
  QCardSectionSlots
} from "quasar";

export namespace CardSection {
  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QCardSection;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps
    extends Omit<QCardSectionProps, keyof OwnProps> {}

  export interface ParentSlots
    extends Omit<QCardSectionSlots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Slots extends ParentSlots, OwnSlots {}
}
