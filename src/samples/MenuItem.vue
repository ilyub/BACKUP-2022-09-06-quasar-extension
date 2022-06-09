<script lang="ts">
import { MenuItem } from "./MenuItem.extras";
import { mdiAccount, mdiPen, mdiPenPlus } from "@mdi/js";
import { useQuasar } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-menu-item",
  setup: () => {
    const $q = useQuasar();

    return {
      click: (): void => {
        $q.notify(MenuItem.lang.Click);
      },
      confirmedClick: (): void => {
        $q.notify(MenuItem.lang.ConfirmedClick);
      },
      lk: MenuItem.lang.keys,
      mdiAccount,
      mdiPen,
      mdiPenPlus
    };
  }
});
</script>

<template>
  <m-page-section>
    <m-icon-button :icon="mdiAccount">
      <m-menu auto-close>
        <q-list>
          <m-menu-item :caption="lk.Click" :icon="mdiPen" @click="click" />
          <m-menu-item
            :caption="lk.ConfirmedClick"
            :confirmation="lk.ConfirmationMessage"
            :confirmed-click="confirmedClick"
            :icon="mdiPenPlus"
          />
        </q-list>
      </m-menu>
    </m-icon-button>
  </m-page-section>
</template>
