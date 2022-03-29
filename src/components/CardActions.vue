<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[CardActions] */

import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  CardActionsOwnProps,
  CardActionsParentProps,
  CardActionsSlots
} from "./CardActions.extras";

export default defineComponent({
  name: "m-card-actions",
  props: propsToPropDefinitions<CardActionsParentProps>(),
  setup(props) {
    validateProps<CardActionsOwnProps>(props);

    return { slotNames: useSlotsNames<CardActionsSlots>()() };
  }
});
</script>

<template>
  <q-card-actions class="m-card-actions q-pt-none">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-card-actions>
</template>
