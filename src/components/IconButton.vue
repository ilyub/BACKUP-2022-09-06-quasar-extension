<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { BaseButtonProps } from "./BaseButton.extras";
import BaseButton from "./BaseButton.vue";

export default defineComponent({
  name: "x-icon-button",
  components: {
    "x-base-button": BaseButton
  },
  props: {} as PropsToPropOptions<BaseButtonProps>
});
</script>

<template>
  <x-base-button class="icon-button-group-member" flat round>
    <slot></slot>
  </x-base-button>
</template>
