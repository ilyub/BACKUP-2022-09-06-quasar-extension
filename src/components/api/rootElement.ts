import type { ComputedRef } from "vue";
import { computed } from "vue";

import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

import type { PropOptionsDefault, SetupProps } from ".";
import { propOptions } from ".";
import PageSection from "./PageSection.vue";
import Section from "./Section.vue";

export type RootElement = "div" | "page-section" | "section";

export interface RootElementProps {
  readonly rootElement: PropOptionsDefault<RootElement>;
}

export const RootElementVO = createValidationObject<RootElement>({
  "div": "div",
  "page-section": "page-section",
  "section": "section"
});

export const isRootElement = is.factory(is.enumeration, RootElementVO);

export const rootElementProps: RootElementProps = {
  rootElement: propOptions.default(isRootElement, "div")
};

/**
 * Returns component for root element.
 *
 * @param props - Vue props.
 * @returns Component for root element.
 */
export function rootComponent(
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
