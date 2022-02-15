import type { GlobalComponentConstructor } from "quasar";
import type { VNode } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { booleanU } from "@skylib/functions/es/types/core";
import { createValidationObject } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";

export type GlobalSwitchable = GlobalComponentConstructor<
  SwitchableProps,
  SwitchableSlots
>;

export interface SwitchableProps {
  readonly indent?: booleanU;
  readonly on?: booleanU;
}

export interface SwitchableSettings {
  readonly transition: Transition;
  readonly transitionDuration: number;
}

export interface SwitchableSlots {
  /**
   * Default slot.
   *
   * @returns Node.
   */
  readonly default: () => readonly VNode[];
}

export type Transition = "none" | "slide";

export const TransitionVO = createValidationObject<Transition>({
  none: "none",
  slide: "slide"
});

export const isTransition = is.factory(is.enumeration, TransitionVO);

export const {
  inject: injectDisable,
  provide: provideDisable,
  test: testDisable
} = createInjectable<boolean>(() => false);

export const {
  inject: injectSwitchableSettings,
  provide: provideSwitchableSettings,
  test: testSwitchableSettings
} = createInjectable<SwitchableSettings>(() => {
  return {
    transition: "none",
    transitionDuration: 200
  };
});
