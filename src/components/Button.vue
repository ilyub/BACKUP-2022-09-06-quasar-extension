<script lang="ts">
import { defineComponent } from "vue";
import type {
  ButtonOwnProps,
  ButtonParentProps,
  ButtonSlots
} from "./Button.extras";
import { propsToPropDefinitions, validateProps, useSlotsNames } from "./api";

export default defineComponent({
  name: "m-button",
  props: propsToPropDefinitions<ButtonParentProps>(),
  setup(props) {
    validateProps<ButtonOwnProps>(props);

    return { slotNames: useSlotsNames<ButtonSlots>()() };
  }
});
</script>

<template>
  <m-base-button class="m-button" color="primary">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
