<script lang="ts">
import { PageLayout } from "./PageLayout.extras";
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
      lang: PageLayout.lang,
      lk: PageLayout.lang.keys,
      scrollbar: ref(true),
      title: ref(true)
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-page-layout
      :class="$style['page-layout']"
      :close-button-off="closeButtonOff"
      :close-button-on="closeButtonOn"
      :title="title ? lk.Title : undefined"
    >
      <template #header>
        <div class="bg-green q-pa-md">{{ lang.Header }}</div>
      </template>
      <template #sticky-header>
        <div class="bg-yellow q-pa-md">
          <m-subsection>{{ lang.StickyHeader }}</m-subsection>
          <m-subsection>
            <m-toggle v-model="title" :label="lk.Title" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButton" :label="lk.CloseButton" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButtonOn" :label="lk.CloseButtonOn" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="closeButtonOff" :label="lk.CloseButtonOff" />
          </m-subsection>
          <m-subsection>
            <m-toggle v-model="scrollbar" :label="lk.Scrollbar" />
          </m-subsection>
        </div>
      </template>
      <template #default>
        {{ lang.Start }}
        <div
          class="q-pa-md"
          :style="{ height: scrollbar ? '1000px' : 'auto' }"
        ></div>
        {{ lang.End }}
      </template>
      <template #sticky-footer>
        <div class="bg-yellow q-pa-md">{{ lang.StickyFooter }}</div>
      </template>
      <template #footer>
        <div class="bg-green q-pa-md">{{ lang.Footer }}</div>
      </template>
    </m-page-layout>
  </m-page-section>
</template>

<style lang="scss" module>
.page-layout {
  border: 1px solid $grey-5;
}
</style>
