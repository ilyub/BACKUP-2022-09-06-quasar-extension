<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { OptionGroupOptions } from "../components/OptionGroup.extras";
import { genericOptionGroup } from "../components/OptionGroup.generic";

type Value = "a" | "b" | 1 | undefined;

export default defineComponent({
  name: "sample-option-group",
  components: {
    "generic-option-group": genericOptionGroup<Value>()
  },
  setup() {
    return {
      options: fn.run<OptionGroupOptions<Value>>(() => [
        { label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        { disable: true, label: "Option 3", value: "b" }
      ]),
      value: ref<Value>("a")
    };
  }
});
</script>

<template>
  <generic-option-group v-model="value" inline :options="options" />
</template>
