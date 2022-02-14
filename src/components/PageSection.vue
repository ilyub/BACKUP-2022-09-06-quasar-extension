<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { PageSectionProps } from "./PageSection.extras";
import Switchable from "./Switchable.vue";

export default defineComponent({
  name: "m-page-section",
  components: {
    "m-switchable": Switchable
  },
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as PageSectionProps)
  },
  setup(_props: SetupProps<PageSectionProps>) {}
});
</script>

<template>
  <m-switchable class="m-page-section">
    <slot></slot>
  </m-switchable>
</template>
