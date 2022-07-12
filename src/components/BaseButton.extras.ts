import type { GlobalComponent, plugins } from "./api";
import type { QBtn, QBtnProps, QBtnSlots } from "quasar";
import type { booleanU, stringU } from "@skylib/functions";
import type { Ref } from "vue";
import { computed } from "vue";
import { injectableSettings } from "./api";

export namespace BaseButton {
  export const defaultSettings = computed(
    (): Settings => ({ animateAsyncClick: true, animateSubmitting: true })
  );

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(defaultSettings);

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main?: QBtn;
  }

  export type Global2 = { [K in keyof Global]: Global[K] | Ref<Global[K]> };

  export interface OwnProps {
    readonly disable?: booleanU;
    readonly loading?: booleanU;
    readonly tooltipDirection?: plugins.direction.Direction | undefined;
    readonly type?: stringU;
  }

  export interface ParentProps
    extends Omit<QBtnProps, keyof OwnProps | keyof PluginProps> {}

  export interface ParentSlots extends QBtnSlots {}

  export interface PluginProps
    extends plugins.asyncClick.Props,
      plugins.confirmedClick.Props,
      plugins.langProps.Props<"label" | "tooltip"> {}

  export interface Props extends ParentProps, PluginProps, OwnProps {}

  export interface Settings {
    readonly animateAsyncClick: boolean;
    readonly animateSubmitting: boolean;
  }

  export interface Slots extends ParentSlots {}
}
