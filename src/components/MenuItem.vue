<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Item } from "./Item.extras";
import type { MenuItem } from "./MenuItem.extras";

export default defineComponent({
  name: "m-menu-item",
  props: {
    ...parentProps<Item.ParentProps>(),
    ...plugins.confirmedClick.props
  },
  setup: (props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<Item.Global>();

    validateExpose<MenuItem.Global>(expose, exposed);

    return {
      confirmedClick: plugins.confirmedClick(props),
      main,
      slotNames: plugins.slotNames<Item.Slots>()()
    };
  }
});
</script>

<template>
  <m-item ref="main" class="m-menu-item" clickable @click="confirmedClick">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </m-item>
</template>
