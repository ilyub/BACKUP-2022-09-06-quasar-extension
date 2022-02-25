import type { ComputedRef } from "vue";
import { computed } from "vue";

import * as is from "@skylib/functions/es/guards";
import { createValidationObject } from "@skylib/functions/es/types/core";

// eslint-disable-next-line import/no-relative-parent-imports
import PageSection from "../PageSection.vue";
// eslint-disable-next-line import/no-relative-parent-imports
import Section from "../Section.vue";
// eslint-disable-next-line import/no-relative-parent-imports
import Subsection from "../Subsection.vue";

import type { SetupProps } from ".";
import { propOptions } from ".";

export type RootElementProp = "div" | "page-section" | "section" | "subsection";

export interface RootElementProps {
  readonly rootElement?: RootElementProp | undefined;
}

export const RootElementPropVO = createValidationObject<RootElementProp>({
  "div": "div",
  "page-section": "page-section",
  "section": "section",
  "subsection": "subsection"
});

export const isRootElementProp = is.factory(is.enumeration, RootElementPropVO);

export const isRootElementPropU = is.or.factory(
  isRootElementProp,
  is.undefined
);

export const rootElementPropsOptions = {
  rootElement: propOptions(isRootElementPropU)
} as const;

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
    switch (props.rootElement ?? "div") {
      case "div":
        return "div";

      case "page-section":
        return PageSection;

      case "section":
        return Section;

      case "subsection":
        return Subsection;
    }
  });
}