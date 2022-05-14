<script lang="ts">
import { components, useInjections } from "./samples";
import * as _ from "@skylib/lodash-commonjs-es";
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  name: "app",
  components: { "router-view": RouterView },
  setup: () => {
    useInjections().provide();

    return {
      caption: (name: string): string =>
        _.startCase(name).replace(/^Sample /u, ""),
      components
    };
  }
});
</script>

<template>
  <div class="q-pa-lg">
    <div id="progressBar" :class="$style.progressBar"></div>
    <div class="row">
      <div>
        <q-list :class="$style.list" dense>
          <m-item
            v-for="component in components"
            :key="component.name"
            :caption="caption(component.name)"
            :class="$style.listItem"
            :to="`/${component.name}`"
          />
        </q-list>
      </div>
      <div :class="$style.component">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use "sass:map";

.component {
  flex-grow: 1;
  max-width: 600px;
  margin-left: map.get($space-md, "x");
}

.list {
  width: 300px;
}

.listItem {
  width: 150px;
  float: left;
}

.progressBar {
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: $blue-3;

  &:global(.progress-bar-active) {
    display: block;
    transition: width 100ms ease;
  }
}
</style>
