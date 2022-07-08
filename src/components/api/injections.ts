import type { ComputedRef } from "vue";
import { computed } from "vue";
import { injectable } from "./misc";

// eslint-disable-next-line @skylib/only-export-name -- Ok
export namespace disable {
  export const { inject, provide } = injectable<ComputedRef<boolean>>(
    computed(() => false)
  );
}
