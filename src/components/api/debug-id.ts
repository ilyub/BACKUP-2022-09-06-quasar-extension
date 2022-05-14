import { as } from "@skylib/functions";
import $ from "jquery";
import type { ObjectDirective } from "vue";

/**
 * Debug ID directive factory.
 *
 * @param prefix - Prefix.
 * @returns Debug ID directive.
 */
export function debugId(prefix: string): ObjectDirective<HTMLElement, unknown> {
  return {
    mounted: (el, binding): void => {
      $(el).attr("data-debug", `${prefix}__${as.string(binding.value)}`);
    }
  };
}
