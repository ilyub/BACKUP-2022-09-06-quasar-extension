<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { OptionGroupOptions } from "../components/OptionGroup.extras";
import OptionGroup from "../components/OptionGroup.vue";

export default defineComponent({
  name: "sample-option-group",
  components: {
    "x-option-group": OptionGroup
  },
  setup() {
    return {
      options: fn.run<OptionGroupOptions>(() => [
        { label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        { disable: true, label: "Option 3", value: "b" }
      ]),
      value: ref<unknown>("a")
    };
  }
});
</script>

<template>
  <x-option-group v-model="value" inline :options="options" />
</template>
