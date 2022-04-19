<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[CardSection] */

import { defineComponent } from "vue";
import type {
  CardSectionOwnProps,
  CardSectionParentProps,
  CardSectionSlots
} from "./CardSection.extras";
import { propsToPropDefinitions, validateProps, useSlotsNames } from "./api";

export default defineComponent({
  name: "m-card-section",
  props: propsToPropDefinitions<CardSectionParentProps>(),
  setup(props) {
    validateProps<CardSectionOwnProps>(props);

    return { slotNames: useSlotsNames<CardSectionSlots>()() };
  }
});
</script>

<template>
  <q-card-section class="m-card-section">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-card-section>
</template>
