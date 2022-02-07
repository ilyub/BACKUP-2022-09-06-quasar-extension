<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { SectionPropOptions } from "./Section.extras";

export default defineComponent({
  name: "x-section",
  props: {} as SectionPropOptions,
  setup(_props: SetupProps<SectionPropOptions>) {}
});
</script>

<template>
  <div class="x-section">
    <slot></slot>
  </div>
</template>
