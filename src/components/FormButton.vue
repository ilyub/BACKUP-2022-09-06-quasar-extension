<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  FormButtonOwnProps,
  FormButtonParentProps,
  FormButtonSlots
} from "./FormButton.extras";

export default defineComponent({
  name: "m-form-button",
  props: propsToPropDefinitions<FormButtonParentProps>(),
  setup(props) {
    validateProps<FormButtonOwnProps>(props);

    return {
      slotNames: useSlotsNames<FormButtonSlots>()()
    };
  }
});
</script>

<template>
  <m-base-button class="m-form-button" flat>
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </m-base-button>
</template>
