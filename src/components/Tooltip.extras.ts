import { disableCounter } from "./Tooltip.core";
import { injectableSettings } from "./api";
import { computed, onUnmounted, ref, watch } from "vue";
import type { GlobalComponent, plugins } from "./api";
import type { QTooltip, QTooltipProps, QTooltipSlots } from "quasar";
import type { Ref } from "vue";

export namespace Tooltip {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(computed(() => defaultSettings));

  export const defaultSettings: Settings = { delay: 0, show: true };

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: QTooltip;
  }

  export interface ParentProps extends QTooltipProps {}

  export interface ParentSlots extends QTooltipSlots {}

  export interface PluginProps extends plugins.direction.Props {}

  export interface Props extends ParentProps, PluginProps {}

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
