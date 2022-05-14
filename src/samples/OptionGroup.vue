<script lang="ts">
import { generic } from "..";
import { typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

type Value = "a" | "b" | 1;

export default defineComponent({
  name: "sample-option-group",
  components: { "value-option-group": generic.OptionGroup<Value>() },
  setup: () => {
    return {
      options: typedef<extras.OptionGroup.Options<Value>>([
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        {
          disable: true,
          label: "Option 3",
          value: "b"
        }
      ]),
      value1: ref<Value>("a"),
      value2: ref<Value>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <value-option-group v-model="value1" :options="options" />
  </m-page-section>
  <m-page-section>
    <value-option-group v-model="value2" inline :options="options" />
  </m-page-section>
</template>
