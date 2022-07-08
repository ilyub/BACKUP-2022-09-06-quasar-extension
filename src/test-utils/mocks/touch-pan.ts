import type { Directive } from "vue";
import { as } from "@skylib/functions";
import type { unknowns } from "@skylib/functions";

/**
 * Mocks v-touch-pan directive.
 *
 * @returns Mock.
 */
export function touchPan(): touchPan.Mock {
  let value: unknown;

  const directive: Directive = {
    created: (_el, binding) => {
      value = binding.value;
    }
  };

  return { directive, trigger };

  function trigger(...args: unknowns): void {
    as.callable(value)(...args);
  }
}

export namespace touchPan {
  export interface Mock {
    readonly directive: Directive;
    /**
     * Triggers v-touch-pan directive.
     *
     * @param args - Arguments.
     */
    readonly trigger: (...args: unknowns) => void;
  }
}
