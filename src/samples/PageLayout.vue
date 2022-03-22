<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-page-layout",
  setup() {
    return {
      closeButtonOff: ref(false),
      closeButtonOn: ref(false),
      scrollbar: ref(false),
      title: ref(false)
    };
  }
});
</script>

<template>
  <m-page-layout
    :class="$style.pageLayout"
    :close-button-off="closeButtonOff"
    :close-button-on="closeButtonOn"
    :title="title ? 'Title' : undefined"
  >
    <template #header>
      <div class="bg-green q-pa-md">Header</div>
    </template>
    <template #sticky-header>
      <div class="bg-yellow q-pa-md">
        <m-section>Sticky header</m-section>
        <m-section>
          <m-subsection>
            <m-toggle v-model="title" label="Title" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButtonOn" label="Close button" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButtonOff" label="Hide close button" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="scrollbar" label="Scrollbar" />
          </m-subsection>
        </m-section>
      </div>
    </template>
    <div class="bg-white">
      Default
      <div
        class="q-pa-md"
        :style="{
          height: scrollbar ? '1000px' : 'auto'
        }"
      ></div>
      Default
    </div>
    <template #sticky-footer>
      <div class="bg-yellow q-pa-md">Sticky footer</div>
    </template>
    <template #footer>
      <div class="bg-green q-pa-md">Footer</div>
    </template>
  </m-page-layout>
</template>

<style lang="scss" module>
.pageLayout {
  border: 1px solid red;
}
</style>
