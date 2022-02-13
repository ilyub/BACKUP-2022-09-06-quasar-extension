<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { IndentPropOptions } from "./Indent.extras";

export default defineComponent({
  name: "x-indent",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as IndentPropOptions,
  setup(_props: SetupProps<IndentPropOptions>) {}
});
</script>

<template>
  <div class="x-indent">
    <slot></slot>
  </div>
</template>
