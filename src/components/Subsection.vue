<script lang="ts">
import { defineComponent } from "vue";
import type {
  SubsectionOwnProps,
  SubsectionParentProps,
  SubsectionSlots
} from "./Subsection.extras";
import { propsToPropDefinitions, validateProps, useSlotsNames } from "./api";

export default defineComponent({
  name: "m-subsection",
  props: propsToPropDefinitions<SubsectionParentProps>(),
  setup(props) {
    validateProps<SubsectionOwnProps>(props);

    return { slotNames: useSlotsNames<SubsectionSlots>()() };
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
