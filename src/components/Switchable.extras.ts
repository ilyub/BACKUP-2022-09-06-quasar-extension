import { injectableSettings } from "./api";
import type { GlobalComponent, VNodes } from "./api";
import type { booleanU } from "@skylib/functions";

export namespace Switchable {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings(() => defaultSettings);

  export const defaultSettings: Settings = {
    transition: "none",
    transitionDuration: 200
  };

  export interface Global extends GlobalComponent<Props, Slots> {}

  export interface OwnProps {
    readonly disable?: booleanU;
    readonly indent?: booleanU;
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
    readonly transition: Transition;
    readonly transitionDuration: number;
  }

  export interface Slots extends ParentSlots, OwnSlots {}

  export type Transition = "none" | "slide";
}
