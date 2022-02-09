<script lang="ts">
import { defineComponent, ref } from "vue";

import Resizer from "../components/Resizer.vue";
import Toggle from "../components/Toggle.vue";

export default defineComponent({
  name: "sample-resizer",
  components: {
    "x-resizer": Resizer,
    "x-toggle": Toggle
  },
  setup() {
    return {
      resizerShow: ref(true),
      resizerWidth: ref(200)
    };
  }
});
</script>

<template>
  <x-toggle v-model="resizerShow" />
  <div
    class="q-mt-sm resizer"
    :style="{
      width: `${resizerWidth}px`
    }"
  >
    <x-resizer
      v-show="resizerShow"
      v-model="resizerWidth"
      :max="300"
      :min="100"
    />
  </div>
</template>

<style lang="scss" scoped>
.resizer {
  position: relative;
  height: 50px;
  background: blue;
}
</style>
