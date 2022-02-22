<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-page-layout"
});
</script>

<template>
  <m-section>
    <m-page-layout :class="$style.pageLayout">
      <div class="bg-grey-3 q-pa-md">Content</div>
    </m-page-layout>
  </m-section>
  <m-section>
    <m-page-layout :class="$style.pageLayout" title="Title">
      <div class="bg-grey-3 q-pa-md">Content</div>
    </m-page-layout>
  </m-section>
  <m-section>
    <m-page-layout :class="$style.pageLayout" close-button title="Title">
      <div class="bg-grey-3 q-pa-md">Content</div>
    </m-page-layout>
  </m-section>
</template>

<style lang="scss" module>
.pageLayout {
  border: 1px solid red;
}
</style>
