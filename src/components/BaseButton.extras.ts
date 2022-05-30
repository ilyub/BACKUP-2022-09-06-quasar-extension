import { injectableSettings } from "./api";
import type { GlobalComponent, plugins } from "./api";
import type { booleanU, stringU } from "@skylib/functions";
import type { QBtn, QBtnProps, QBtnSlots } from "quasar";

export namespace BaseButton {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const defaultSettings: Settings = {
    animateAsyncClick: true,
    animateSubmitting: true
  };

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QBtn;
  }

  export interface OwnProps
    extends plugins.useAsyncClick.Props,
      plugins.useConfirmedClick.Props {
    readonly disable?: booleanU;
    readonly loading?: booleanU;
    readonly tooltip?: stringU;
    readonly tooltipDirection?: plugins.useDirection.Direction | undefined;
    readonly type?: stringU;
  }

  export interface ParentProps extends Omit<QBtnProps, keyof OwnProps> {}

  export interface ParentSlots extends QBtnSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Settings {
    readonly animateAsyncClick: boolean;
    readonly animateSubmitting: boolean;
  }

  export interface Slots extends ParentSlots {}
}
