<script lang="ts">
import { mdiAccount, mdiPen, mdiPenPlus } from "@mdi/js";
import { useQuasar } from "quasar";
import { defineComponent } from "vue";

export default defineComponent({
  name: "sample-menu-item",
  setup: () => {
    const $q = useQuasar();

    return {
      click: (): void => {
        $q.notify("Click");
      },
      confirmedClick: (): void => {
        $q.notify("Confirmed click");
      },
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
          <m-menu-item caption="Click" :icon="mdiPen" @click="click" />
          <m-menu-item
            caption="Confirmed click"
            confirmation="Confirmation message"
            :confirmed-click="confirmedClick"
            :icon="mdiPenPlus"
          />
        </q-list>
      </m-menu>
    </m-icon-button>
  </m-page-section>
</template>
