<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { defineComponent } from "vue";

import PageLayout from "../components/PageLayout.vue";
import PageMarkupTable from "../components/PageMarkupTable.vue";

export default defineComponent({
  name: "sample-page-markup-table",
  components: {
    "x-page-layout": PageLayout,
    "x-page-markup-table": PageMarkupTable
  }
});
</script>

<template>
  <x-page-layout class="page-layout">
    <x-page-markup-table class="page-markup-table" flat>
      <thead>
        <tr>
          <th v-for="row in 3" :key="row">H:{{ row }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="col in 20" :key="col">
          <td v-for="row in 3" :key="row">{{ col }}:{{ row }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th v-for="row in 3" :key="row">F:{{ row }}</th>
        </tr>
      </tfoot>
    </x-page-markup-table>
  </x-page-layout>
</template>

<style lang="scss" scoped>
.page-layout {
  border: 1px solid red;
}

.page-markup-table {
  border: 1px solid blue;
}
</style>
