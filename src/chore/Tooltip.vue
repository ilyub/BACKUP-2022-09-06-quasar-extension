<script lang="ts">
import { defineComponent } from "vue";
import {
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiMenu
} from "@mdi/js";

import IconButton from "../components/IconButton.vue";
import ListItem from "../components/ListItem.vue";
import Menu from "../components/Menu.vue";
import Tooltip from "../components/Tooltip.vue";

export default defineComponent({
  name: "sample-tooltip",
  components: {
    "x-icon-button": IconButton,
    "x-list-item": ListItem,
    "x-menu": Menu,
    "x-tooltip": Tooltip
  },
  setup() {
    return {
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiMenu
    };
  }
});
</script>

<template>
  <x-icon-button :icon="mdiMenu">
    <x-menu>
      <q-list>
        <x-list-item caption="Menu item" />
      </q-list>
    </x-menu>
    <x-tooltip>Sample tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowDown">
    <x-tooltip>Down tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowDown">
    <x-tooltip direction="down">Down tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowDown">
    <x-tooltip direction="down-left">Down-left tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowDown">
    <x-tooltip direction="down-right">Down-right tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowLeft">
    <x-tooltip direction="left">Left tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowLeft">
    <x-tooltip direction="left-down">Left-down tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowLeft">
    <x-tooltip direction="left-up">Left-up tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowRight">
    <x-tooltip direction="right">Right tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowRight">
    <x-tooltip direction="right-down">Right-down tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowRight">
    <x-tooltip direction="right-up">Right-up tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowUp">
    <x-tooltip direction="up">Up tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowUp">
    <x-tooltip direction="up-left">Up-left tooltip</x-tooltip>
  </x-icon-button>
  <x-icon-button :icon="mdiArrowUp">
    <x-tooltip direction="up-right">Up-right tooltip</x-tooltip>
  </x-icon-button>
</template>
