<script lang="ts">
import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import BaseButton from "./BaseButton.vue";
import type { FormButtonPropOptions } from "./FormButton.extras";

export default defineComponent({
  name: "x-form-button",
  components: {
    "x-base-button": BaseButton
  },
  props: {} as FormButtonPropOptions,
  setup(_props: SetupProps<FormButtonPropOptions>) {}
});
</script>

<template>
  <x-base-button class="x-button-group-member" flat>
    <slot></slot>
  </x-base-button>
</template>
