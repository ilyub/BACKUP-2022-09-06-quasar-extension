<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import BaseButton from "./BaseButton.vue";
import type { FormButtonPropOptions } from "./FormButton.extras";

export default defineComponent({
  name: "m-form-button",
  components: {
    "m-base-button": BaseButton
  },
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as FormButtonPropOptions,
  setup(_props: SetupProps<FormButtonPropOptions>) {}
});
</script>

<template>
  <m-base-button class="m-button-group-member" flat>
    <slot></slot>
  </m-base-button>
</template>
