<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { IndentProps } from "./Indent.extras";

export default defineComponent({
  name: "m-indent",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as IndentProps,
  setup(_props: SetupProps<IndentProps>) {}
});
</script>

<template>
  <div class="m-indent">
    <slot></slot>
  </div>
</template>
