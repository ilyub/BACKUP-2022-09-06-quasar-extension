<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateEmit, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  ExpansionItemOwnProps,
  ExpansionItemParentProps,
  ExpansionItemSlots
} from "./ExpansionItem.extras";

export default defineComponent({
  name: "m-expansion-item",
  props: propsToPropDefinitions<ExpansionItemParentProps>(),
  setup(props, { emit }) {
    validateEmit<ExpansionItemOwnProps>(emit);
    validateProps<ExpansionItemOwnProps>(props);

    return {
      slotNames: useSlotsNames<ExpansionItemSlots>()()
    };
  }
});
</script>

<template>
  <q-expansion-item :class="$style.item">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-expansion-item>
</template>

<style lang="scss" module>
.item :global(.q-expansion-item__container > .q-item .q-item__section--side) {
  min-width: 0;
}
</style>
