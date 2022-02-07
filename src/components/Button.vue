<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { BaseButtonProps } from "./BaseButton.extras";
import BaseButton from "./BaseButton.vue";

export default defineComponent({
  name: "x-button",
  components: {
    "x-base-button": BaseButton
  },
  props: {} as PropsToPropOptions<BaseButtonProps>
});
</script>

<template>
  <x-base-button class="x-button-group-member" color="primary">
    <slot></slot>
  </x-base-button>
</template>
