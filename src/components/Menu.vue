<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Menu] */

import { Tooltip } from "./Tooltip.extras";
import { parentProps, plugins } from "./api";
import { defineComponent } from "vue";
import type { Button } from "./Button.extras";
import type { Menu } from "./Menu.extras";

export default defineComponent({
  name: "m-menu",
  props: { ...parentProps<Menu.ParentProps>(), ...plugins.useDirection.props },
  setup: props => {
    const { dirAnchor, dirOffset, dirSelf } = plugins.useDirection(props);

    return {
      dirAnchor,
      dirOffset,
      dirSelf,
      disableTooltips: Tooltip.useDisableTooltips(),
      slotNames: plugins.useSlotNames<Button.Slots>()()
    };
  }
});
</script>

<template>
  <q-menu
    :anchor="dirAnchor"
    class="m-menu"
    :offset="dirOffset"
    :self="dirSelf"
    @update:model-value="disableTooltips = $event"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-menu>
</template>
