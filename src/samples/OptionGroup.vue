<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { OptionGroupOptions } from "../components/OptionGroup.extras";

export default defineComponent({
  name: "sample-option-group",
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
  <m-option-group v-model="value" inline :options="options" />
</template>
