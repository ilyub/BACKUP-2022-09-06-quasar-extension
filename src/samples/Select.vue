<script lang="ts">
import { generic } from "..";
import { typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

type Value = "a" | "b" | 1;

export default defineComponent({
  name: "sample-select",
  components: { "value-select": generic.Select<Value>() },
  setup: () => {
    return {
      selectOptions: typedef<extras.Select.Options<Value>>([
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        {
          disable: true,
          label: "Option 3",
          value: "b"
        }
      ]),
      selectValue1: ref<Value>("a"),
      selectValue2: ref<Value>(),
      selectValue3: ref<Value>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <value-select v-model="selectValue1" :options="selectOptions" />
    <value-select v-model="selectValue2" :options="selectOptions" />
    <value-select
      v-model="selectValue3"
      initial-label="Custom label"
      :options="selectOptions"
    />
  </m-page-section>
</template>
