<script lang="ts">
import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  PageSectionOwnerProps,
  PageSectionParentProps,
  PageSectionSlots
} from "./PageSection.extras";

export default defineComponent({
  name: "m-page-section",
  props: propsToPropDefinitions<PageSectionParentProps>(),
  setup(props) {
    validateProps<PageSectionOwnerProps>(props);

    return {
      slotNames: useSlotsNames<PageSectionSlots>()()
    };
  }
});
</script>

<template>
  <m-switchable class="m-page-section">
    {{ slotNames.passThroughSlots }}
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </m-switchable>
</template>
