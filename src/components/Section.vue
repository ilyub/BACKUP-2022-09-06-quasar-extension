<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  SectionOwnProps,
  SectionParentProps,
  SectionSlots
} from "./Section.extras";

export default defineComponent({
  name: "m-section",
  props: propsToPropDefinitions<SectionParentProps>(),
  setup(props) {
    validateProps<SectionOwnProps>(props);

    return {
      slotNames: useSlotsNames<SectionSlots>()()
    };
  }
});
</script>

<template>
  <m-switchable class="m-section">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </m-switchable>
</template>
