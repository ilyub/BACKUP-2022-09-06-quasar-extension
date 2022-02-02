<script lang="ts">
import { defineComponent } from "vue";

import type { PropsToPropOptions } from "./api";
import type { BaseButtonProps } from "./BaseButton";
import BaseButton from "./BaseButton.vue";

export default defineComponent({
  name: "s-form-button",
  components: {
    "s-base-button": BaseButton
  },
  props: {} as PropsToPropOptions<BaseButtonProps>
});
</script>

<template>
  <s-base-button flat>
    <slot></slot>
  </s-base-button>
</template>
