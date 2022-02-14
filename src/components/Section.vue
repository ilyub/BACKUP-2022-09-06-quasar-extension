<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SectionPropOptions } from "./Section.extras";

export default defineComponent({
  name: "m-section",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SectionPropOptions),
    indent: propOptions.boolean()
  },
  setup(_props: SetupProps<SectionPropOptions>) {}
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
