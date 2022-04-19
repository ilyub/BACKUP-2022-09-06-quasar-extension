<script lang="ts">
import { datetime } from "@skylib/facades";
import type { stringU } from "@skylib/functions";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-datetime-picker",
  setup() {
    return {
      datetimeMax: datetime
        .create()
        .add(3, "days")
        .setHours(14)
        .setMinutes(30)
        .toString(),
      datetimeMin: datetime
        .create()
        .sub(3, "days")
        .setHours(9)
        .setMinutes(30)
        .toString(),
      datetimeValue: ref<stringU>(undefined)
    };
  }
});
</script>

<template>
  <m-datetime-picker
    v-model="datetimeValue"
    clearable
    :max="datetimeMax"
    :min="datetimeMin"
  />
</template>
