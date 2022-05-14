<script lang="ts">
import { useInjections } from "./core";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "sample-page-layout",
  setup: () => {
    const { pageLayoutCloseButton } = useInjections();

    return {
      closeButton: pageLayoutCloseButton,
      closeButtonOff: ref(false),
      closeButtonOn: ref(false),
      scrollbar: ref(false),
      title: ref(true)
    };
  }
});
</script>

<template>
  <m-page-section>
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
          <m-subsection>Sticky header</m-subsection>
          <m-subsection>
            <m-toggle v-model="title" label="Title" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButton" label="Close button" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButtonOn" label="Close button on" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButtonOff" label="Close button off" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="scrollbar" label="Scrollbar" />
          </m-subsection>
        </div>
      </template>
      <template #default>
        Start
        <div
          class="q-pa-md"
          :style="{ height: scrollbar ? '1000px' : 'auto' }"
        ></div>
        End
      </template>
      <template #sticky-footer>
        <div class="bg-yellow q-pa-md">Sticky footer</div>
      </template>
      <template #footer>
        <div class="bg-green q-pa-md">Footer</div>
      </template>
    </m-page-layout>
  </m-page-section>
</template>

<style lang="scss" module>
.pageLayout {
  border: 1px solid red;
}
</style>
