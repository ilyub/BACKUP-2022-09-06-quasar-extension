<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { computed, defineComponent, ref } from "vue";

import type { stringU } from "@skylib/functions/es/types/core";

import type { GroupItems } from "../components/Group.extras";
import Group from "../components/Group.vue";
import Input from "../components/Input.vue";

export default defineComponent({
  name: "sample-group",
  components: {
    "x-group": Group,
    "x-input": Input
  },
  setup() {
    const showSection1 = ref(true);

    const showSection2 = ref(true);

    const showSection3 = ref(true);

    const showSection4 = ref(true);

    return {
      groupItems: computed<GroupItems>(() => [
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
      searchString: ref<stringU>(undefined),
      showSection1,
      showSection2,
      showSection3,
      showSection4
    };
  }
});
</script>

<template>
  <x-input v-model="searchString" label="Search for settings" />
  <div class="q-mt-md">
    Show
    <q-checkbox v-model="showSection1" /> 1
    <q-checkbox v-model="showSection2" /> 2
    <q-checkbox v-model="showSection3" /> 3
    <q-checkbox v-model="showSection4" /> 4
  </div>
  <x-group
    class="q-mt-lg"
    :items="groupItems"
    not-found-label="No results found"
    :search-string="searchString"
  >
    <template #section2>Section 2</template>
    <template #section1>Section 1</template>
    <template #section3>Section 11</template>
    <template #section4>Section 12</template>
  </x-group>
</template>
