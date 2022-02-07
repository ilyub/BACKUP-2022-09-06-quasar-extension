<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { PageSectionPropOptions } from "./PageSection.extras";

export default defineComponent({
  name: "x-page-section",
  props: {} as PageSectionPropOptions,
  setup(_props: SetupProps<PageSectionPropOptions>) {}
});
</script>

<template>
  <div class="x-page-section">
    <slot></slot>
  </div>
</template>
