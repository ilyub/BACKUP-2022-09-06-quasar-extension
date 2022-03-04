<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Menu] */

import { defineComponent } from "vue";

import { propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { ButtonSlots } from "./Button.extras";
import type { MenuOwnProps, MenuParentProps } from "./Menu.extras";
import { useDisableTooltips } from "./Tooltip.extras";

export default defineComponent({
  name: "m-menu",
  props: propsToPropDefinitions<MenuParentProps>(),
  setup(props) {
    validateProps<MenuOwnProps>(props);

    const { active } = useDisableTooltips();

    return {
      slotNames: useSlotsNames<ButtonSlots>()(),
      updateModel(event: boolean): void {
        active.value = event;
      }
    };
  }
});
</script>

<template>
  <q-menu @update:model-value="updateModel">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]>
      <slot :name="slotName"></slot>
    </template>
  </q-menu>
</template>
