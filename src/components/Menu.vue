<script lang="ts">
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[quasar-extension.Menu] */

import { Menu } from "./Menu.extras";
import { Tooltip } from "./Tooltip.extras";
import { parentProps, plugins, propFactory, validateExpose } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { Button } from "./Button.extras";
import type { QMenu } from "quasar";

const prop = propFactory<Menu.OwnProps>();

export default defineComponent({
  name: "m-menu",
  props: {
    ...parentProps<Menu.ParentProps>(),
    ...plugins.direction.props,
    autoClose: prop.boolean<"autoClose">()
  },
  setup: (props, { expose }) => {
    const direction = plugins.direction(props);

    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<QMenu>();

    validateExpose<Menu.Global>(expose, exposed);

    Menu.provideMenu({
      autoClose: () => {
        if (props.autoClose) as.not.empty(main.value).hide();
      }
    });

    return {
      anchor: direction.anchor,
      disableTooltips: Tooltip.useDisableTooltips(),
      main,
      offset: direction.offset,
      self: direction.self,
      slotNames: plugins.slotNames<Button.Slots>()()
    };
  }
});
</script>

<template>
  <q-menu
    ref="main"
    :anchor="anchor"
    :auto-close="autoClose"
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
