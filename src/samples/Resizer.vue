<script lang="ts">
import { defineComponent, ref } from "vue";
import { Resizer } from "./Resizer.extras";
import { settings } from "./core";

export default defineComponent({
  name: "sample-resizer",
  setup: (_props, { expose }) => {
    const { lang } = Resizer;

    const lk = lang.keys;

    const { resizerDisable } = settings;

    expose({});

    return { lk, resizerDisable, width: ref(200) };
  }
});
</script>

<template>
  <m-page-section>
    <m-toggle v-model="resizerDisable" :label="lk.Disable" />
  </m-page-section>
  <m-page-section>
    <div :class="$style.resizer" :style="{ width: `${width}px` }">
      <m-resizer v-model="width" :max="400" :min="100" />
    </div>
  </m-page-section>
</template>

<style lang="scss" module>
.resizer {
  position: relative;
  height: 50px;
  background: blue;
}
</style>
