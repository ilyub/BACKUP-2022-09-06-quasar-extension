<script lang="ts">
import us from "flag-icon-css/flags/1x1/us.svg";
import { defineComponent } from "vue";
import { mdiAccount, mdiPen } from "@mdi/js";

import IconButton from "../components/IconButton.vue";
import ListItem from "../components/ListItem.vue";
import Menu from "../components/Menu.vue";

export default defineComponent({
  name: "sample-icon-button",
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
