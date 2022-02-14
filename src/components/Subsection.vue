<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SubsectionProps } from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SubsectionProps),
    indent: propOptions.boolean()
  },
  setup(_props: SetupProps<SubsectionProps>) {}
});
</script>

<template>
  <div
    :class="{
      'm-indent': indent,
      'm-subsection': true
    }"
  >
    <slot></slot>
  </div>
</template>
