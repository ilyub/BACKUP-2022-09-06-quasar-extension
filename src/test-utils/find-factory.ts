import type * as testUtils from "@vue/test-utils";
import type { DOMWrapper, DOMWrappers, Wrapper, WrapperLikes } from "./core";
import type { ComponentPublicInstance } from "vue";
import { a } from "@skylib/functions";

/**
 * Find factory.
 *
 * @param prefix - Prefix.
 * @param wrapper - Wrapper.
 * @returns Find functions.
 */
export function findFactory(
  prefix: string,
  wrapper: Wrapper
): findFactory.Result {
  return {
    comp: (ref, index = 0) =>
      index
        ? a.get(
            wrapper.findAllComponents<ComponentPublicInstance>(selector(ref)),
            index
          )
        : wrapper.findComponent<ComponentPublicInstance>(selector(ref)),
    compByRef: ref => wrapper.findComponent({ ref }),
    compElem: (ref, ref2) =>
      wrapper.findComponent(selector(ref)).find(selector(ref2)),
    comps: ref => wrapper.findAllComponents(selector(ref)),
    elem: (ref, index = 0) =>
      index
        ? a.get(wrapper.findAll(selector(ref)), index)
        : wrapper.find(selector(ref)),
    elems: ref => wrapper.findAll(selector(ref))
  };

  function selector(ref: string): string {
    return `[data-debug=${prefix}__${ref}]`;
  }
}

export namespace findFactory {
  export interface Result {
    /**
     * Finds component.
     *
     * @param ref - Reference.
     * @param index - Index.
     * @returns Wrapper.
     */
    readonly comp: (ref: string, index?: number) => testUtils.VueWrapper;
    /**
     * Finds component.
     *
     * @param ref - Reference.
     * @returns Wrapper.
     */
    readonly compByRef: (ref: string) => testUtils.VueWrapper;
    /**
     * Finds element.
     *
     * @param ref - Component reference.
     * @param ref2 - Element reference.
     * @returns Wrapper.
     */
    readonly compElem: (ref: string, ref2: string) => DOMWrapper;
    /**
     * Finds components.
     *
     * @param ref - Reference.
     * @returns Wrappers.
     */
    readonly comps: (ref: string) => WrapperLikes;
    /**
     * Finds element.
     *
     * @param ref - Reference.
     * @param index - Index.
     * @returns Wrapper.
     */
    readonly elem: (ref: string, index?: number) => DOMWrapper;
    /**
     * Finds elements.
     *
     * @param ref - Reference.
     * @returns Wrappers.
     */
    readonly elems: (ref: string) => DOMWrappers;
  }
}
