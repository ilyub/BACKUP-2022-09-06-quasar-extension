<script lang="ts">
import { useProvide } from "./useProvide";
import { mdiImageEdit, mdiImageEditOutline } from "@mdi/js";
import { defineComponent, ref } from "vue";
import type { stringU } from "@skylib/functions";

export default defineComponent({
  name: "sample-icon-picker",
  setup() {
    const { iconPickerTooltips } = useProvide();

    return {
      icon1: ref<stringU>(undefined),
      icon2: ref<stringU>(undefined),
      iconPickerTooltips,
      mdiImageEdit,
      mdiImageEditOutline
    };
  }
});
</script>

<template>
  <q-checkbox v-model="iconPickerTooltips" label="Icon tooltips:" left-label />
  <m-icon-picker v-model="icon1" :placeholder="mdiImageEdit" />
  <m-icon-picker
    v-model="icon2"
    :cols="2"
    :placeholder="mdiImageEditOutline"
    :rows="1"
    spinner-size="30px"
  />
  co = 2, rest = 5
</template>
