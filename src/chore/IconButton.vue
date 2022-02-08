<script lang="ts">
import us from "flag-icon-css/flags/1x1/us.svg";
import { defineComponent } from "vue";
import { mdiAccount, mdiPen } from "@mdi/js";

import IconButton from "../components/IconButton.vue";
import Menu from "../components/Menu.vue";
import MenuItem from "../components/MenuItem.vue";

export default defineComponent({
  name: "sample-icon-button",
  components: {
    "x-icon-button": IconButton,
    "x-menu": Menu,
    "x-menu-item": MenuItem
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
        <x-menu-item caption="Settings" :icon="mdiPen" />
        <x-menu-item caption="Language">
          <template #icon>
            <img alt="Alt text" height="18" :src="us" width="18" />
          </template>
        </x-menu-item>
        <q-separator />
        <x-menu-item caption="Exit" />
      </q-list>
    </x-menu>
  </x-icon-button>
</template>
