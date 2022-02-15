<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-page-markup-table"
});
</script>

<template>
  <m-page-layout class="page-layout">
    <m-page-markup-table class="page-markup-table" flat>
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
    </m-page-markup-table>
  </m-page-layout>
</template>

<style lang="scss" scoped>
.page-layout {
  border: 1px solid red;
}

.page-markup-table {
  border: 1px solid blue;
}
</style>
