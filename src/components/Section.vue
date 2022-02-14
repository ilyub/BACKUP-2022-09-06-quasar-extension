<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SectionProps } from "./Section.extras";

export default defineComponent({
  name: "m-section",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SectionProps),
    indent: propOptions.boolean()
  },
  setup(_props: SetupProps<SectionProps>) {}
});
</script>

<template>
  <div
    :class="{
      'm-indent': indent,
      'm-section': true
    }"
  >
    <slot></slot>
  </div>
</template>
