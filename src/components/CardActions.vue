<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[CardActions] */

import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { CardActionsPropOptions } from "./CardActions.extras";

export default defineComponent({
  name: "x-card-actions",
  props: {} as CardActionsPropOptions,
  setup(_props: SetupProps<CardActionsPropOptions>) {}
});
</script>

<template>
  <q-card-actions class="q-pt-none">
    <slot></slot>
  </q-card-actions>
</template>
