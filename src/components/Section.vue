<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { SectionPropOptions } from "./Section.extras";

export default defineComponent({
  name: "m-section",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as SectionPropOptions,
  setup(_props: SetupProps<SectionPropOptions>) {}
});
</script>

<template>
  <div class="m-section">
    <slot></slot>
  </div>
</template>
