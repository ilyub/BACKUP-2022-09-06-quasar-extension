import { injectableSettings } from "./api";
import type { GlobalComponent, VNodes } from "./api";
import type { numberU } from "@skylib/functions";

export namespace Resizer {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const defaultSettings: Settings = { disable: false };

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

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentProps {}

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface ParentSlots {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Settings {
    readonly disable: boolean;
  }

  export interface Slots extends ParentSlots, OwnSlots {}
}
