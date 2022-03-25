<script lang="ts">
import { defineComponent, ref } from "vue";

import * as fn from "@skylib/functions/es/function";

import type { SelectOptions } from "../components/Select.extras";
import { genericSelect } from "../components/Select.generic";

type Value = "a" | "b" | 1;

export default defineComponent({
  name: "sample-select",
  components: {
    "m-select-generic": genericSelect<Value>()
  },
  setup() {
    return {
      // eslint-disable-next-line no-warning-comments
      // fixme: Use typedef
      selectOptions: fn.run<SelectOptions<Value>>(() => [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        { disable: true, label: "Option 3", value: "b" }
      ]),
      selectValue1: ref<Value>("a"),
      selectValue2: ref<Value | undefined>(),
      selectValue3: ref<Value | undefined>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-select-generic v-model="selectValue1" :options="selectOptions" />
  </m-page-section>
  <m-page-section>
    <m-select-generic v-model="selectValue2" :options="selectOptions" />
  </m-page-section>
  <m-page-section>
    <m-select-generic
      v-model="selectValue3"
      initial-label="Custom label"
      :options="selectOptions"
    />
  </m-page-section>
</template>
