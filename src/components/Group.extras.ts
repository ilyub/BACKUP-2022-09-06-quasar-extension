import PageSection from "./PageSection.vue";
import Section from "./Section.vue";
import Subsection from "./Subsection.vue";
import { computed } from "vue";
import type { GlobalComponent, SetupProps, VNodes } from "./api";
import type { Rec, stringU } from "@skylib/functions";
import type { ComputedRef } from "vue";

export type GlobalGroup<T extends string = string> = GlobalComponent<
  GroupProps<T>,
  GroupSlots<T>
>;

export interface GroupItem<T extends string = string> {
  readonly id: T;
  readonly show: boolean;
  readonly title: string;
}

export type GroupItems<T extends string = string> = ReadonlyArray<GroupItem<T>>;

export interface GroupOwnProps<T extends string = string>
  extends RootElementProps {
  readonly items: GroupItems<T>;
  readonly notFoundLabel?: stringU;
  readonly searchString?: stringU;
}

export interface GroupParentProps {}

export interface GroupProps<T extends string = string>
  extends GroupParentProps,
    GroupOwnProps<T> {}

export type GroupSlots<T extends string = string> = Rec<T, () => VNodes>;

export type RootElementProp = "div" | "page-section" | "section" | "subsection";

export interface RootElementProps {
  readonly rootElement?: RootElementProp | undefined;
}

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
