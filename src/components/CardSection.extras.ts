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

  export interface ParentProps extends QCardSectionProps {}

  export interface ParentSlots extends QCardSectionSlots {}

  export interface Props extends ParentProps {}

  export interface Slots extends ParentSlots {}
}
