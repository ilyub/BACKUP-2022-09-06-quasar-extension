<script lang="ts">
import { defineComponent } from "vue";
import type {
  IconButtonOwnProps,
  IconButtonParentProps,
  IconButtonSlots
} from "./IconButton.extras";
import { propsToPropDefinitions, validateProps, useSlotsNames } from "./api";

export default defineComponent({
  name: "m-icon-button",
  props: propsToPropDefinitions<IconButtonParentProps>(),
  setup(props) {
    validateProps<IconButtonOwnProps>(props);

    return { slotNames: useSlotsNames<IconButtonSlots>()() };
  }
});
</script>

<template>
  <m-base-button class="m-icon-button" flat round>
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
