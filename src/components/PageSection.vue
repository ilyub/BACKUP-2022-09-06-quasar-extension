<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { PageSectionPropOptions } from "./PageSection.extras";

export default defineComponent({
  name: "m-page-section",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as PageSectionPropOptions,
  setup(_props: SetupProps<PageSectionPropOptions>) {}
});
</script>

<template>
  <div class="m-page-section">
    <slot></slot>
  </div>
</template>
