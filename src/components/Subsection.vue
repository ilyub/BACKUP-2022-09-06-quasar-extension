<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  SubsectionOwnerProps,
  SubsectionParentProps,
  SubsectionSlots
} from "./Subsection.extras";

export default defineComponent({
  name: "m-subsection",
  props: propsToPropDefinitions<SubsectionParentProps>(),
  setup(props) {
    validateProps<SubsectionOwnerProps>(props);

    return {
      slotNames: useSlotsNames<SubsectionSlots>()()
    };
  }
});
</script>

<template>
  <m-switchable class="m-subsection">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </m-switchable>
</template>
