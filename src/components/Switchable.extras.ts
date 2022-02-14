import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type { PropOptionsBoolean } from "./api";
import { createInjectable } from "./api";

export interface SwitchableProps {
  readonly indent: PropOptionsBoolean;
  readonly on: PropOptionsBoolean;
}

export interface SwitchableSettings {
  readonly transition: Transition;
  readonly transitionDuration: number;
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
