<script lang="ts">
import * as fn from "@skylib/functions/es/function";
import { defineComponent, ref } from "vue";
import type { OptionGroupOptions } from "../components/OptionGroup.extras";
import { genericOptionGroup } from "../components/OptionGroup.generic";

export default defineComponent({
  name: "sample-option-group",
  components: { "generic-option-group": genericOptionGroup<Value>() },
  setup() {
    return {
      // eslint-disable-next-line no-warning-comments
      // fixme: Use typedef
      options: fn.run<OptionGroupOptions<Value>>(() => [
        { label: "Select option", value: undefined },
        { label: "Option 1", value: 1 },
        { label: "Option 2", value: "a" },
        {
          disable: true,
          label: "Option 3",
          value: "b"
        }
      ]),
      value: ref<Value>("a")
    };
  }
});

type Value = "a" | "b" | 1 | undefined;
</script>

<template>
  <generic-option-group v-model="value" inline :options="options" />
</template>
