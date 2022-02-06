import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

import { createInjectable } from "./api";

export interface SwitchableSettings {
  readonly fadeOpacity: number;
  readonly transition: Transition;
  readonly transitionDuration: number;
}

export type Transition = "slide" | "fade";

export const TransitionVO = createValidationObject<Transition>({
  fade: "fade",
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
    fadeOpacity: 0.5,
    transition: "fade",
    transitionDuration: 200
  };
});
