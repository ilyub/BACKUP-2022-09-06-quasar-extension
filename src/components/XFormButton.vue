<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { XBaseButtonProps } from "./XBaseButton.extras";
import XBaseButton from "./XBaseButton.vue";

export default defineComponent({
  name: "x-form-button",
  components: {
    "x-base-button": XBaseButton
  },
  props: {} as PropsToPropOptions<XBaseButtonProps>
});
</script>

<template>
  <x-base-button class="button-group-member" flat>
    <slot></slot>
  </x-base-button>
</template>
