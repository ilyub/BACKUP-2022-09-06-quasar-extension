<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { SubsectionProps } from "./Subsection.extras";
import Switchable from "./Switchable.vue";

export default defineComponent({
  name: "m-subsection",
  components: {
    "m-switchable": Switchable
  },
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SubsectionProps)
  },
  setup(_props: SetupProps<SubsectionProps>) {}
});
</script>

<template>
  <m-switchable class="m-subsection">
    <slot></slot>
  </m-switchable>
</template>
