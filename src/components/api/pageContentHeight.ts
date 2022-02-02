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
  extraPageOffset: () => stringU
): ComputedRef<string> {
  const pageOffset = injectPageOffset();

  return computed<string>(() =>
    is.not.empty(pageOffset.value)
      ? `calc(100vh - ${pageOffset.value} - ${extraPageOffset() ?? "0px"})`
      : "auto"
  );
}
