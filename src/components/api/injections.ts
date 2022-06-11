import { injectable } from "./misc";
import { computed } from "vue";
import type { ComputedRef } from "vue";

export namespace disable {
  export const { inject, provide } = injectable<ComputedRef<boolean>>(() =>
    computed(() => false)
  );
}

export namespace submitting {
  export const { inject, provide } = injectable<ComputedRef<boolean>>(() =>
    computed(() => false)
  );
}
