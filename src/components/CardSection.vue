<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[CardSection] */

import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { CardSectionPropOptions } from "./CardSection.extras";

export default defineComponent({
  name: "x-card-section",
  props: {} as CardSectionPropOptions,
  setup(_props: SetupProps<CardSectionPropOptions>) {}
});
</script>

<template>
  <q-card-section>
    <slot></slot>
  </q-card-section>
</template>
