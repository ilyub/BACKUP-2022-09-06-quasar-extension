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
    "m-icon-button": IconButton,
    "m-list-item": ListItem,
    "m-menu": Menu,
    "m-tooltip": Tooltip
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
  <m-icon-button :icon="mdiMenu">
    <m-menu>
      <q-list>
        <m-list-item caption="Menu item" />
      </q-list>
    </m-menu>
    <m-tooltip>Sample tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowDown">
    <m-tooltip>Down tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowDown">
    <m-tooltip direction="down">Down tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowDown">
    <m-tooltip direction="down-left">Down-left tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowDown">
    <m-tooltip direction="down-right">Down-right tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowLeft">
    <m-tooltip direction="left">Left tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowLeft">
    <m-tooltip direction="left-down">Left-down tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowLeft">
    <m-tooltip direction="left-up">Left-up tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowRight">
    <m-tooltip direction="right">Right tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowRight">
    <m-tooltip direction="right-down">Right-down tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowRight">
    <m-tooltip direction="right-up">Right-up tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowUp">
    <m-tooltip direction="up">Up tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowUp">
    <m-tooltip direction="up-left">Up-left tooltip</m-tooltip>
  </m-icon-button>
  <m-icon-button :icon="mdiArrowUp">
    <m-tooltip direction="up-right">Up-right tooltip</m-tooltip>
  </m-icon-button>
</template>
