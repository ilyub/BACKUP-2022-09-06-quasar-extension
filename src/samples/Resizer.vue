<script lang="ts">
import { useInjections } from "./core";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-resizer",
  setup: () => {
    return { disable: useInjections().resizerDisable, width: ref(200) };
  }
});
</script>

<template>
  <m-page-section>
    <m-toggle v-model="disable" label="Disable" />
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
