<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Menu] */

import { Tooltip } from "./Tooltip.extras";
import { parentProps, plugins } from "./api";
import { defineComponent, ref } from "vue";
import type { Button } from "./Button.extras";
import type { Menu } from "./Menu.extras";
import type { QMenu } from "quasar";

export default defineComponent({
  name: "m-menu",
  props: { ...parentProps<Menu.ParentProps>(), ...plugins.useDirection.props },
  setup: props => {
    const direction = plugins.useDirection(props);

    return {
      anchor: direction.anchor,
      disableTooltips: Tooltip.useDisableTooltips(),
      main: ref<QMenu>(),
      offset: direction.offset,
      self: direction.self,
      slotNames: plugins.useSlotNames<Button.Slots>()()
    };
  }
});
</script>

<template>
  <q-menu
    ref="main"
    :anchor="anchor"
    class="m-menu"
    :offset="offset"
    :self="self"
    @update:model-value="disableTooltips = $event"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-menu>
</template>
