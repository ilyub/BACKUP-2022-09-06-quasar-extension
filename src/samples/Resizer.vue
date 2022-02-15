<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-resizer",
  setup() {
    return {
      resizerShow: ref(true),
      resizerWidth: ref(200)
    };
  }
});
</script>

<template>
  <m-toggle v-model="resizerShow" />
  <div
    class="q-mt-sm resizer"
    :style="{
      width: `${resizerWidth}px`
    }"
  >
    <m-resizer
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
