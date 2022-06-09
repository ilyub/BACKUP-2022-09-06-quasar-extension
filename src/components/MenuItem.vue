<script lang="ts">
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { Item } from "./Item.extras";

export default defineComponent({
  name: "m-menu-item",
  props: {
    ...parentProps<Item.ParentProps>(),
    ...plugins.confirmedClick.props
  },
  setup: props => {
    return {
      confirmedClick: plugins.confirmedClick(props),
      main: ref<Item.Global>(),
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
