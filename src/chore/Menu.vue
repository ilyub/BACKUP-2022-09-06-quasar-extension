<script lang="ts">
import us from "flag-icon-css/flags/1x1/us.svg";
import { defineComponent } from "vue";
import { mdiAccount, mdiPen } from "@mdi/js";

import IconButton from "../components/IconButton.vue";
import ListItem from "../components/ListItem.vue";
import Menu from "../components/Menu.vue";

export default defineComponent({
  name: "sample-menu",
  components: {
    "x-icon-button": IconButton,
    "x-list-item": ListItem,
    "x-menu": Menu
  },
  setup() {
    return {
      mdiAccount,
      mdiPen,
      us
    };
  }
});
</script>

<template>
  <x-icon-button :icon="mdiAccount">
    <x-menu>
      <q-list>
        <x-list-item caption="Settings" :icon="mdiPen" />
        <x-list-item caption="Language">
          <template #icon>
            <img alt="Alt text" height="18" :src="us" width="18" />
          </template>
        </x-list-item>
        <q-separator />
        <x-list-item caption="Exit" />
      </q-list>
    </x-menu>
  </x-icon-button>
</template>

<style lang="scss" scoped>
@use "sass:map";

table {
  border-collapse: collapse;

  td {
    padding: 10px;
    border: 1px solid $grey-3;
  }
}

.droppable {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: $grey-5;
}

.page-layout {
  border: 1px solid red;
}

.page-markup-table {
  border: 1px solid blue;
}

.page-table {
  border: 1px solid blue;
}

.resizer {
  position: relative;
  height: 50px;
  background: blue;
}

.sortable {
  height: 50px;
  background: $grey-3;

  :deep(.sortable-item) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: $grey-5;
    cursor: default;
  }
}

.wrapper {
  margin: 50px 50px 100px;
}
</style>
