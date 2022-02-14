<script lang="ts">
import us from "flag-icon-css/flags/1x1/us.svg";
import { Notify } from "quasar";
import { defineComponent } from "vue";
import { mdiAccount, mdiPen } from "@mdi/js";

import IconButton from "../components/IconButton.vue";
import ListItem from "../components/ListItem.vue";
import Menu from "../components/Menu.vue";

export default defineComponent({
  name: "sample-menu",
  components: {
    "m-icon-button": IconButton,
    "m-list-item": ListItem,
    "m-menu": Menu
  },
  setup() {
    return {
      click(): void {
        Notify.create("Clicked");
      },
      mdiAccount,
      mdiPen,
      us
    };
  }
});
</script>

<template>
  <m-icon-button :icon="mdiAccount">
    <m-menu auto-close>
      <q-list>
        <m-list-item caption="Settings" :icon="mdiPen" @click="click" />
        <m-list-item caption="Language">
          <template #icon>
            <img alt="Alt text" height="18" :src="us" width="18" />
          </template>
        </m-list-item>
        <q-separator />
        <m-list-item caption="Exit" />
      </q-list>
    </m-menu>
  </m-icon-button>
</template>
