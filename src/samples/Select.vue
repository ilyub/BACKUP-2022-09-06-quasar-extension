<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { SelectOptions } from "../components/Select.extras";
import { genericSelect } from "../components/Select.generic";

type Value = undefined | 1 | "a" | "b";

export default defineComponent({
  name: "sample-select",
  components: {
    "generic-select": genericSelect<Value>()
  },
  setup() {
    return {
      selectOptions: fn.run<SelectOptions<Value>>(() => [
        { label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        { disable: true, label: "Option 3", value: "b" }
      ]),
      selectValue: ref<Value>("a")
    };
  }
});
</script>

<template>
  <generic-select v-model="selectValue" :options="selectOptions" />
</template>
