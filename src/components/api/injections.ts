import type { numberU } from "@skylib/functions/es/types/core";

import type { ComputedInjectionKey } from ".";

export type InjectPageOffset = ComputedInjectionKey<numberU>;

export const injectPageOffset: InjectPageOffset = Symbol("InjectPageOffset");
