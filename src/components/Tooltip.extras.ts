import { disableCounter } from "./Tooltip.core";
import { injectableSettings } from "./api";
import { onUnmounted, ref, watch } from "vue";
import type { GlobalComponent, plugins } from "./api";
import type { QTooltipProps, QTooltipSlots } from "quasar";
import type { Ref } from "vue";

export namespace Tooltip {
  export const defaultSettings: Settings = { delay: 0, show: true };

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps extends plugins.useDirection.Props {}

  export interface ParentProps extends Omit<QTooltipProps, keyof OwnProps> {}

  export interface ParentSlots extends QTooltipSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Settings {
    readonly delay: number;
    readonly fontSize?: string;
    readonly show: boolean;
  }

  export interface Slots extends ParentSlots {}

  /**
   * Use disable tooltips plugin.
   *
   * @returns Disable tooltips plugin.
   */
  export function useDisableTooltips(): Ref<boolean> {
    const active = ref(false);

    onUnmounted(() => {
      if (active.value) disableCounter.value--;
    });

    watch(active, newActive => {
      if (newActive) disableCounter.value++;
      else disableCounter.value--;
    });

    return active;
  }
}
