<script lang="ts">
import { generic } from "..";
import { OptionGroup } from "./OptionGroup.extras";
import { typedef } from "@skylib/functions";
import { defineComponent, ref } from "vue";
import type { extras } from "..";

type Value = "a" | "b" | 1;

export default defineComponent({
  name: "sample-option-group",
  components: {
    // eslint-disable-next-line vue/component-options-name-casing -- Wait for https://github.com/vuejs/eslint-plugin-vue/issues/1908
    "m-option-group__value": generic.OptionGroup<Value>()
  },
  setup: () => {
    return {
      options: typedef<extras.OptionGroup.Options<Value>>([
        { label: OptionGroup.lang.keys.Option1, value: 1 },
        { label: OptionGroup.lang.keys.Option2, value: "a" },
        {
          disable: true,
          label: OptionGroup.lang.keys.Option3,
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
    <m-option-group__value v-model="value1" :options="options" />
  </m-page-section>
  <m-page-section>
    <m-option-group__value v-model="value2" inline :options="options" />
  </m-page-section>
</template>
