<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  ButtonOwnProps,
  ButtonParentProps,
  ButtonSlots
} from "./Button.extras";

export default defineComponent({
  name: "m-button",
  props: propsToPropDefinitions<ButtonParentProps>(),
  setup(props) {
    validateProps<ButtonOwnProps>(props);

    return {
      slotNames: useSlotsNames<ButtonSlots>()()
    };
  }
});
</script>

<template>
  <m-base-button class="m-button-group-member" color="primary">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </m-base-button>
</template>
