import { injectable } from "./misc";
import { computed } from "vue";
import type { ComputedRef } from "vue";

// eslint-disable-next-line @skylib/only-export-name -- Ok
export namespace disable {
  export const { inject, provide } = injectable<ComputedRef<boolean>>(() =>
    computed(() => false)
  );
}
