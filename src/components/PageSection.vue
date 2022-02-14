<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { PageSectionPropOptions } from "./PageSection.extras";

export default defineComponent({
  name: "m-page-section",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as PageSectionPropOptions),
    indent: propOptions.boolean()
  },
  setup(_props: SetupProps<PageSectionPropOptions>) {}
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
