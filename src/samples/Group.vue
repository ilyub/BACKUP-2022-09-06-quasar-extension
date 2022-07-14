<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Group } from "./Group.extras";
import type { extras } from "..";
import { generic } from "..";

type Section = "section1" | "section2" | "section3" | "section4";

export default defineComponent({
  name: "sample-group",
  components: { "m-group__page-sections": generic.Group<Section>() },
  setup: (_props, { expose }) => {
    const showSection1 = ref(true);

    const showSection2 = ref(true);

    const showSection3 = ref(true);

    const showSection4 = ref(true);

    const title1 = Group.lang.plain("Section 1 aaa bbb");

    const title2 = Group.lang.plain("Section 2 bbb ccc");

    const title3 = Group.lang.plain("Section 11 ccc ddd");

    const title4 = Group.lang.plain("Section 12 ddd eee");

    expose({});

    return {
      groupItems: computed(
        (): extras.Group.Items<Section> => [
          {
            id: "section2",
            show: showSection2.value,
            title: title2
          },
          {
            id: "section1",
            show: showSection1.value,
            title: title1
          },
          {
            id: "section3",
            show: showSection3.value,
            title: title3
          },
          {
            id: "section4",
            show: showSection4.value,
            title: title4
          }
        ]
      ),
      lang: Group.lang,
      lk: Group.lang.keys,
      searchString: ref<string>(),
      showSection1,
      showSection2,
      showSection3,
      showSection4,
      title1,
      title2,
      title3,
      title4
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-subsection>
      <m-input v-model="searchString" :label="lk.SearchForSettings" />
    </m-subsection>
    <m-subsection>
      {{ lang.Show }}
      <q-checkbox v-model="showSection1" /> 1
      <q-checkbox v-model="showSection2" /> 2
      <q-checkbox v-model="showSection3" /> 3
      <q-checkbox v-model="showSection4" /> 4
    </m-subsection>
  </m-page-section>
  <m-group__page-sections
    :class="$style.section"
    :items="groupItems"
    :not-found-label="lk.NoResultsFound"
    root-element="page-section"
    :search-string="searchString"
  >
    <template #section2>{{ lang.get(title2) }}</template>
    <template #section1>{{ lang.get(title1) }}</template>
    <template #section3>{{ lang.get(title3) }}</template>
    <template #section4>{{ lang.get(title4) }}</template>
  </m-group__page-sections>
</template>

<style lang="scss" module>
@use "sass:map";

.section {
  padding: map.get($space-md, "y") map.get($space-md, "x");
  border: 1px solid $grey-5;
}
</style>
