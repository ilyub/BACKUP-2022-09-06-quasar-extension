import type { ComputedRef } from "vue";
import { computed } from "vue";

import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

// eslint-disable-next-line import/no-relative-parent-imports
import PageSection from "../PageSection.vue";
// eslint-disable-next-line import/no-relative-parent-imports
import Section from "../Section.vue";

import type { PropOptionsDefault, SetupProps } from ".";
import { propOptions } from ".";

export type RootElementProp = "div" | "page-section" | "section";

export interface RootElementProps {
  readonly rootElement: PropOptionsDefault<RootElementProp>;
}

export const RootElementPropVO = createValidationObject<RootElementProp>({
  "div": "div",
  "page-section": "page-section",
  "section": "section"
});

export const isRootElementProp = is.factory(is.enumeration, RootElementPropVO);

export const rootElementProps: RootElementProps = {
  rootElement: propOptions.default(isRootElementProp, "div")
};

/**
 * Root element module.
 *
 * @param props - Vue props.
 * @returns Root component.
 */
export function useRootElement(
  props: SetupProps<RootElementProps>
): ComputedRef<unknown> {
  return computed<unknown>(() => {
    switch (props.rootElement) {
      case "div":
        return "div";

      case "page-section":
        return PageSection;

      case "section":
        return Section;
    }
  });
}
