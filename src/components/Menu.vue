<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[Menu] */

import { defineComponent } from "vue";
import type { ButtonSlots } from "./Button.extras";
import type { MenuOwnProps, MenuParentProps } from "./Menu.extras";
import { useDisableTooltips } from "./Tooltip.extras";
import { propsToPropDefinitions, validateProps, useSlotsNames } from "./api";

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
  <q-menu class="m-menu" @update:model-value="updateModel">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
  </q-menu>
</template>
