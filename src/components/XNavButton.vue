<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { BaseButtonProps } from "./XBaseButton";
import XBaseButton from "./XBaseButton.vue";

export default defineComponent({
  name: "x-nav-button",
  components: {
    "x-base-button": XBaseButton
  },
  props: {} as PropsToPropOptions<BaseButtonProps>
});
</script>

<template>
  <x-base-button class="nav-button-group-member" flat round>
    <slot></slot>
  </x-base-button>
</template>
