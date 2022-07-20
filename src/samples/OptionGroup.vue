<script lang="ts">
import { defineComponent, ref } from "vue";
import { OptionGroup } from "./OptionGroup.extras";
import type { extras } from "..";
import { generic } from "..";
import { typedef } from "@skylib/functions";

enum Value {
  a = "a",
  b = "b",
  c = "c"
}

export default defineComponent({
  name: "sample-option-group",
  components: { "m-option-group__value": generic.OptionGroup<Value>() },
  setup: (_props, { expose }) => {
    const { lang } = OptionGroup;

    const lk = lang.keys;

    expose();

    return {
      options: typedef<extras.OptionGroup.Options<Value>>([
        { label: lk.Option1, value: Value.a },
        { label: lk.Option2, value: Value.b },
        { disable: true, label: lk.Option3, value: Value.c }
      ]),
      value1: ref(Value.b),
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
