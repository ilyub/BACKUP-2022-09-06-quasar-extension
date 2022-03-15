import type { ComputedRef } from "vue";
import { computed } from "vue";

import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";

import { createInjectable } from ".";

export const {
  inject: injectPageOffset,
  provide: providePageOffset,
  test: testPageOffset
} = createInjectable<stringU>(() => undefined);

/**
 * Page content height module.
 *
 * @param extraPageOffset - Extra page offset.
 * @returns Page content height.
 */
export function usePageContentHeight(
  extraPageOffset: () => stringU = (): undefined => undefined
): ComputedRef<string> {
  const pageOffset = injectPageOffset();

  return computed<string>(() => {
    const po = pageOffset.value;

    if (is.not.empty(po)) {
      const epo = extraPageOffset();

      return is.not.empty(epo)
        ? `calc(100vh - ${po} - ${epo})`
        : `calc(100vh - ${po})`;
    }

    return "auto";
  });
}
