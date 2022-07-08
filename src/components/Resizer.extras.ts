import type { GlobalComponent, VNodes } from "./api";
import { computed } from "vue";
import { injectableSettings } from "./api";
import type { numberU } from "@skylib/functions";

export namespace Resizer {
  export const defaultSettings = computed((): Settings => ({ disable: false }));

  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(defaultSettings);

  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps {
    readonly max?: numberU;
    readonly min?: numberU;
    readonly modelValue?: numberU;
    /**
     * Emits model value.
     *
     * @param value - Value.
     */
    readonly "onUpdate:modelValue"?: (value: number) => void;
  }

  export interface OwnSlots {
    /**
     * Default slot.
     *
     * @returns Nodes.
     */
    readonly default: () => VNodes;
  }

  export interface Props extends OwnProps {}

  export interface Settings {
    readonly disable: boolean;
  }

  export interface Slots extends OwnSlots {}
}
