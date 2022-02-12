<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Menu] */

import { defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";

import type { SetupProps } from "./api";
import type { MenuPropOptions } from "./Menu.extras";
import { useDisableTooltips } from "./Tooltip.extras";

export default defineComponent({
  name: "x-menu",
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  props: {} as MenuPropOptions,
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(_props: SetupProps<MenuPropOptions>) {
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
