<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { SectionProps } from "./Section.extras";
import Switchable from "./Switchable.vue";

export default defineComponent({
  name: "m-section",
  components: {
    "m-switchable": Switchable
  },
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SectionProps)
  },
  setup(_props: SetupProps<SectionProps>) {}
});
</script>

<template>
  <m-switchable class="m-section">
    <slot></slot>
  </m-switchable>
</template>
