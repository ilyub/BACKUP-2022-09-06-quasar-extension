<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  mdiArrowDown,
  mdiArrowLeft,
  mdiArrowRight,
  mdiArrowUp,
  mdiPen,
  mdiPenPlus
} from "@mdi/js";
import { PopupProxy } from "./PopupProxy.extras";
import type { plugins } from "..";

export default defineComponent({
  name: "sample-popup-proxy",
  setup: (_props, { expose }) => {
    const menuDirection = ref<plugins.direction.Direction>();

    const menuShow = ref(false);

    const menuTarget = ref("#default");

    expose({});

    return {
      click: (direction: plugins.direction.Direction | undefined): void => {
        menuDirection.value = direction;
        menuShow.value = true;
        menuTarget.value = direction ? `#${direction}` : "#default";
      },
      lk: PopupProxy.lang.keys,
      mdiArrowDown,
      mdiArrowLeft,
      mdiArrowRight,
      mdiArrowUp,
      mdiPen,
      mdiPenPlus,
      menuDirection,
      menuShow,
      menuTarget
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button
          id="default"
          :icon="mdiArrowDown"
          @click="click(undefined)"
        />
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button id="down" :icon="mdiArrowDown" @click="click('down')" />
        <m-icon-button
          id="down-left"
          :icon="mdiArrowDown"
          @click="click('down-left')"
        />
        <m-icon-button
          id="down-right"
          :icon="mdiArrowDown"
          @click="click('down-right')"
        />
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button id="left" :icon="mdiArrowLeft" @click="click('left')" />
        <m-icon-button
          id="left-down"
          :icon="mdiArrowLeft"
          @click="click('left-down')"
        />
        <m-icon-button
          id="left-up"
          :icon="mdiArrowLeft"
          @click="click('left-up')"
        />
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button
          id="right"
          :icon="mdiArrowRight"
          @click="click('right')"
        />
        <m-icon-button
          id="right-down"
          :icon="mdiArrowRight"
          @click="click('right-down')"
        />
        <m-icon-button
          id="right-up"
          :icon="mdiArrowRight"
          @click="click('right-up')"
        />
      </m-icon-buttons-group>
    </m-subsection>
    <m-subsection>
      <m-icon-buttons-group>
        <m-icon-button id="up" :icon="mdiArrowUp" @click="click('up')" />
        <m-icon-button
          id="up-left"
          :icon="mdiArrowUp"
          @click="click('up-left')"
        />
        <m-icon-button
          id="up-right"
          :icon="mdiArrowUp"
          @click="click('up-right')"
        />
      </m-icon-buttons-group>
    </m-subsection>
  </m-page-section>
  <m-popup-proxy
    v-model="menuShow"
    :direction="menuDirection"
    no-parent-event
    :target="menuTarget"
  >
    <q-list>
      <m-item :caption="lk.Item1" :icon="mdiPen" />
      <m-item :caption="lk.Item2" :icon="mdiPenPlus" />
    </q-list>
  </m-popup-proxy>
</template>
