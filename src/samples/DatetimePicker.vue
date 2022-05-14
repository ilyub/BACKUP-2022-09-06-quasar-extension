<script lang="ts">
import { datetime } from "@skylib/facades";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-datetime-picker",
  setup: () => {
    return {
      max: datetime
        .create()
        .setHours(12)
        .setMinutes(0)
        .add(3, "days")
        .add(2, "hours")
        .add(30, "minutes")
        .toString(),
      min: datetime
        .create()
        .setHours(12)
        .setMinutes(0)
        .sub(3, "days")
        .sub(2, "hours")
        .sub(30, "minutes")
        .toString(),
      value: ref<string>()
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-datetime-picker v-model="value" clearable :max="max" :min="min" />
  </m-page-section>
</template>
