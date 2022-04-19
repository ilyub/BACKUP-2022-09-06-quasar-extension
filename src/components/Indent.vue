<script lang="ts">
import { defineComponent } from "vue";
import type { IndentSlots } from "./Indent.extras";
import { useSlotsNames } from "./api";

export default defineComponent({
  name: "m-indent",
  setup() {
    return { slotNames: useSlotsNames<IndentSlots>()("default") };
  }
});
</script>

<template>
  <div class="m-indent">
    <slot :name="slotNames.default"></slot>
  </div>
</template>
