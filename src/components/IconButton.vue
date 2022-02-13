<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import BaseButton from "./BaseButton.vue";
import type { IconButtonPropOptions } from "./IconButton.extras";

export default defineComponent({
  name: "m-icon-button",
  components: {
    "m-base-button": BaseButton
  },
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as IconButtonPropOptions,
  setup(_props: SetupProps<IconButtonPropOptions>) {}
});
</script>

<template>
  <m-base-button class="m-icon-button-group-member" flat round>
    <slot></slot>
  </m-base-button>
</template>
