<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { BaseButtonProps } from "./XBaseButton";
import XBaseButton from "./XBaseButton.vue";

export default defineComponent({
  name: "x-button",
  components: {
    "x-base-button": XBaseButton
  },
  props: {} as PropsToPropOptions<BaseButtonProps>
});
</script>

<template>
  <x-base-button class="button-group-member" color="primary">
    <slot></slot>
  </x-base-button>
</template>
