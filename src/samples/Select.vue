<script lang="ts">
import { components } from "..";
import { fn } from "@skylib/functions";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-select",
  components: { "m-select-generic": components.genericSelect<Value>() },
  setup() {
    return {
      // eslint-disable-next-line no-warning-comments
      // fixme: Use typedef
      selectOptions: fn.run<components.SelectOptions<Value>>(() => [
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        {
          disable: true,
          label: "Option 3",
          value: "b"
        }
      ]),
      selectValue1: ref<Value>("a"),
      selectValue2: ref<Value | undefined>(),
      selectValue3: ref<Value | undefined>()
    };
  }
});

type Value = "a" | "b" | 1;
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
