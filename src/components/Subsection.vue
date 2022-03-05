<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  SubsectionOwnProps,
  SubsectionParentProps,
  SubsectionSlots
} from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  props: propsToPropDefinitions<SubsectionParentProps>(),
  setup(props) {
    validateProps<SubsectionOwnProps>(props);

    return {
      slotNames: useSlotsNames<SubsectionSlots>()()
    };
  }
});
</script>

<template>
  <m-switchable class="m-subsection">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
