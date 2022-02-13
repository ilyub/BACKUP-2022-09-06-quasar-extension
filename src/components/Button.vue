<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import BaseButton from "./BaseButton.vue";
import type { ButtonPropOptions } from "./Button.extras";

export default defineComponent({
  name: "m-button",
  components: {
    "m-base-button": BaseButton
  },
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as ButtonPropOptions,
  setup(_props: SetupProps<ButtonPropOptions>) {}
});
</script>

<template>
  <m-base-button class="m-button-group-member" color="primary">
    <slot></slot>
  </m-base-button>
</template>
