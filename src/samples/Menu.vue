<script lang="ts">
import us from "flag-icon-css/flags/1x1/us.svg";
import { defineComponent } from "vue";
import { mdiAccount, mdiPen } from "@mdi/js";

export default defineComponent({
  name: "sample-menu",
  setup() {
    return {
      accountIcon: mdiAccount,
      settingsIicon: mdiPen,
      us
    };
  }
});
</script>

<template>
  <m-icon-button :icon="accountIcon">
    <m-menu auto-close>
      <q-list>
        <m-list-item
          caption="Settings"
          :icon="settingsIicon"
          @click="$q.notify('Clicked')"
        />
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
