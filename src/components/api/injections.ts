import type { ComputedRef, InjectionKey } from "vue";

import type { numberU } from "@skylib/functions/es/types/core";

export type InjectPageOffset = InjectionKey<ComputedRef<numberU>>;

export const injectPageOffset: InjectPageOffset = Symbol("InjectPageOffset");
