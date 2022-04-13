<script lang="ts">
import {
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiMenu
} from "@mdi/js";
import { defineComponent } from "vue";
import { useProvide } from "./useProvide";

export default defineComponent({
  name: "sample-tooltip",
  setup() {
    const { tooltipDelay, tooltipShow } = useProvide();

    return {
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiMenu,
      tooltipDelay,
      tooltipShow
    };
  }
});
</script>

<template>
  <m-subsection>
    <m-toggle v-model="tooltipShow" label="Show tooltips:" left-label />
  </m-subsection>
  <m-subsection indent>
    with delay of
    <m-knob
      v-model="tooltipDelay"
      :disable="!tooltipShow"
      inline
      :max="3000"
      :step="100"
    />
    ms
  </m-subsection>
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
