<script lang="ts">
import { generic } from "..";
import { Group } from "./Group.extras";
import { computed, defineComponent, ref } from "vue";
import type { extras } from "..";

type Section = "section1" | "section2" | "section3" | "section4";

export default defineComponent({
  name: "sample-group",
  components: { "page-sections-group": generic.Group<Section>() },
  setup: () => {
    const showSection1 = ref(true);

    const showSection2 = ref(true);

    const showSection3 = ref(true);

    const showSection4 = ref(true);

    return {
      groupItems: computed<extras.Group.Items<Section>>(() => [
        {
          id: "section2",
          show: showSection2.value,
          title: "Section 2 bbb ccc"
        },
        {
          id: "section1",
          show: showSection1.value,
          title: "Section 1 aaa bbb"
        },
        {
          id: "section3",
          show: showSection3.value,
          title: "Section 11 ccc ddd"
        },
        {
          id: "section4",
          show: showSection4.value,
          title: "Section 12 ddd eee"
        }
      ]),
      lang: Group.lang,
      lk: Group.lang.keys,
      searchString: ref<string>(),
      showSection1,
      showSection2,
      showSection3,
      showSection4
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
  <page-sections-group
    :class="$style.section"
    :items="groupItems"
    :not-found-label="lk.NoResultsFound"
    root-element="page-section"
    :search-string="searchString"
  >
    <template #section2>
      {{ groupItems.find(item => item.id === "section2")?.title }}
    </template>
    <template #section1>
      {{ groupItems.find(item => item.id === "section1")?.title }}
    </template>
    <template #section3>
      {{ groupItems.find(item => item.id === "section3")?.title }}
    </template>
    <template #section4>
      {{ groupItems.find(item => item.id === "section4")?.title }}
    </template>
  </page-sections-group>
</template>

<style lang="scss" module>
@use "sass:map";

.section {
  padding: map.get($space-md, "y") map.get($space-md, "x");
  border: 1px solid $grey-5;
}
</style>
