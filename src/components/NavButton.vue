<script lang="ts">
import { computed, defineComponent } from "vue";

import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import Tooltip from "./Tooltip.vue";

export default defineComponent({
  name: "x-nav-button",
  components: {
    "x-tooltip": Tooltip
  },
  props: {
    tooltip: propOptions(is.stringU),
    tooltipDirection: propOptions(is.stringU)
  },
  setup(props) {
    return {
      hasTooltip: computed<boolean>(() => is.not.empty(props.tooltip))
    };
  }
});
</script>

<template>
  <q-btn flat round>
    <slot></slot>
    <x-tooltip v-if="hasTooltip" :direction="tooltipDirection">
      {{ tooltip }}
    </x-tooltip>
  </q-btn>
</template>
