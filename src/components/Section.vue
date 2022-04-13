<script lang="ts">
import { defineComponent } from "vue";
import type {
  SectionOwnProps,
  SectionParentProps,
  SectionSlots
} from "./Section.extras";
import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";

export default defineComponent({
  name: "m-section",
  props: propsToPropDefinitions<SectionParentProps>(),
  setup(props) {
    validateProps<SectionOwnProps>(props);

    return { slotNames: useSlotsNames<SectionSlots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-section">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
