<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  PageSectionOwnProps,
  PageSectionParentProps,
  PageSectionSlots
} from "./PageSection.extras";

export default defineComponent({
  name: "m-page-section",
  props: propsToPropDefinitions<PageSectionParentProps>(),
  setup(props) {
    validateProps<PageSectionOwnProps>(props);

    return { slotNames: useSlotsNames<PageSectionSlots>()() };
  }
});
</script>

<template>
  <m-switchable class="m-page-section">
    {{ slotNames.passThroughSlots }}
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </m-switchable>
</template>
