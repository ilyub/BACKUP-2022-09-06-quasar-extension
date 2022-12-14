<script lang="ts">
/* eslint-disable @skylib/quasar-extension/vue/template/no-q-menu -- Ok */

import { defineComponent, ref } from "vue";
import { parentProps, plugins, propFactory } from "./api";
import type { Exposed } from "./api";
import { Menu } from "./Menu.extras";
import type { QMenu } from "quasar";
import { Tooltip } from "./Tooltip.extras";
import { as } from "@skylib/functions";

const prop = propFactory<Menu.OwnProps>();

export default defineComponent({
  name: "m-menu",
  props: {
    ...parentProps<Menu.ParentProps>(),
    ...plugins.direction.props,
    autoClose: prop.boolean("autoClose")
  },
  setup: (props, { expose }) => {
    const direction = plugins.direction(props);

    const main = ref<QMenu>();

    const exposed: Exposed<Menu.Global> = { main };

    expose(exposed);
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
      slotNames: plugins.slotNames<Menu.Slots>()()
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
