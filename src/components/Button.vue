<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import BaseButton from "./BaseButton.vue";
import type { ButtonPropOptions } from "./Button.extras";

export default defineComponent({
  name: "x-button",
  components: {
    "x-base-button": BaseButton
  },
  props: {} as ButtonPropOptions,
  setup(_props: SetupProps<ButtonPropOptions>) {}
});
</script>

<template>
  <x-base-button class="x-button-group-member" color="primary">
    <slot></slot>
  </x-base-button>
</template>
