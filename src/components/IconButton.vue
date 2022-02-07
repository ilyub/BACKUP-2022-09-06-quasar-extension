<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import BaseButton from "./BaseButton.vue";
import type { IconButtonPropOptions } from "./IconButton.extras";

export default defineComponent({
  name: "x-icon-button",
  components: {
    "x-base-button": BaseButton
  },
  props: {} as IconButtonPropOptions,
  setup(_props: SetupProps<IconButtonPropOptions>) {}
});
</script>

<template>
  <x-base-button class="x-icon-button-group-member" flat round>
    <slot></slot>
  </x-base-button>
</template>
