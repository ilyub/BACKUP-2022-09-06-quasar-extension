<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { PageSectionProps } from "./PageSection.extras";

export default defineComponent({
  name: "m-page-section",
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as PageSectionProps),
    indent: propOptions.boolean()
  },
  setup(_props: SetupProps<PageSectionProps>) {}
});
</script>

<template>
  <div
    :class="{
      'm-indent': indent,
      'm-page-section': true
    }"
  >
    <slot></slot>
  </div>
</template>
