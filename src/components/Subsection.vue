<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import type { SubsectionPropOptions } from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as SubsectionPropOptions),
    indent: propOptions.boolean()
  },
  setup(_props: SetupProps<SubsectionPropOptions>) {}
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
