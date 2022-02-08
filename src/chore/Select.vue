<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { SelectOptions } from "../components/Select.extras";
import Select from "../components/Select.vue";

export default defineComponent({
  name: "sample-select",
  components: {
    "x-select": Select
  },
  setup() {
    return {
      selectOptions: fn.run<SelectOptions>(() => [
        { label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        { disable: true, label: "Option 3", value: "b" }
      ]),
      selectValue: ref<unknown>("a")
    };
  }
});
</script>

<template>
  <x-select v-model="selectValue" :options="selectOptions" />
</template>
