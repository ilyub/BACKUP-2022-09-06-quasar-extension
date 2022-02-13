<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[CardSection] */

import { defineComponent } from "vue";

import type { SetupProps } from "./api";
import type { CardSectionPropOptions } from "./CardSection.extras";

export default defineComponent({
  name: "m-card-section",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as CardSectionPropOptions,
  setup(_props: SetupProps<CardSectionPropOptions>) {}
});
</script>

<template>
  <q-card-section>
    <slot></slot>
  </q-card-section>
</template>
