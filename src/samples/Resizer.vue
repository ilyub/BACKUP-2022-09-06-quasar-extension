<script lang="ts">
import { defineComponent, ref } from "vue";
import { components } from "..";

export default defineComponent({
  name: "sample-resizer",
  setup() {
    const disable = ref(false);

    components.provideResizerSettings(() => {
      return { disable: disable.value };
    });

    return { disable, width: ref(200) };
  }
});
</script>

<template>
  <m-section>
    <m-toggle v-model="disable" label="Disable" left-label />
  </m-section>
  <m-section>
    <div
      :class="$style.resizer"
      :style="{
        width: `${width}px`
      }"
    >
      <m-resizer v-model="width" :max="400" :min="100" /></div
  ></m-section>
</template>

<style lang="scss" module>
.resizer {
  position: relative;
  height: 50px;
  background: blue;
}
</style>
