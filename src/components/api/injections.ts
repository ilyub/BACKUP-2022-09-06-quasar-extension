import type { numberU } from "@skylib/functions/es/types/core";

import { createInjectable } from ".";

export const {
  inject: injectPageOffset,
  provide: providePageOffset,
  test: testPageOffset
} = createInjectable<numberU>(() => undefined);
