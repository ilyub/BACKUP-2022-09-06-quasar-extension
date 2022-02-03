<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { XBaseButtonProps } from "./XBaseButton";
import XBaseButton from "./XBaseButton.vue";

export default defineComponent({
  name: "x-icon-button",
  components: {
    "x-base-button": XBaseButton
  },
  props: {} as PropsToPropOptions<XBaseButtonProps>
});
</script>

<template>
  <x-base-button class="icon-button-group-member" flat round>
    <slot></slot>
  </x-base-button>
</template>
