<script lang="ts">
import { Menu } from "./Menu.extras";
import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { Item } from "./Item.extras";
import type { MenuItem } from "./MenuItem.extras";

export default defineComponent({
  name: "m-menu-item",
  props: {
    ...parentProps<Item.ParentProps>(),
    ...plugins.confirmedClick.props
  },
  setup: (props, { expose }) => {
    const confirmedClick = plugins.confirmedClick(props);

    const main = ref<Item.Global>();

    const menu = Menu.injectMenu();

    const exposed = { main } as const;

    validateExpose<MenuItem.Global>(expose, exposed);

    return {
      click: () => {
        menu.autoClose();
        confirmedClick();
      },
      main,
      slotNames: plugins.slotNames<Item.Slots>()()
    };
  }
});
</script>

<template>
  <m-item ref="main" class="m-menu-item" clickable @click="click">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-item>
</template>
