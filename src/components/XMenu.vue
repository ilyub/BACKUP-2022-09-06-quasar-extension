<script lang="ts">
import { defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";

import { useDisableTooltips } from "./XTooltip.extras";

export default defineComponent({
  name: "x-menu",
  setup() {
    const { active } = useDisableTooltips();

    return {
      updateModel(event: unknown): void {
        assert.boolean(event);
        active.value = event;
      }
    };
  }
});
</script>

<template>
  <q-menu @update:model-value="updateModel"><slot></slot></q-menu>
</template>
