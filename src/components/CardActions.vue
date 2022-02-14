<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[CardActions] */

import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { CardActionsProps } from "./CardActions.extras";

export default defineComponent({
  name: "m-card-actions",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as CardActionsProps,
  setup(_props: SetupProps<CardActionsProps>) {}
});
</script>

<template>
  <q-card-actions class="q-pt-none">
    <slot></slot>
  </q-card-actions>
</template>
