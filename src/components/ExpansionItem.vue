<script lang="ts">
import { parentProps, plugins, validateExpose } from "./api";
import { defineComponent, ref } from "vue";
import type { ExpansionItem } from "./ExpansionItem.extras";
import type { QExpansionItem } from "quasar";

export default defineComponent({
  name: "m-expansion-item",
  props: {
    ...parentProps<ExpansionItem.ParentProps>(),
    ...plugins.langProps.props("caption", "label")
  },
  setup: (props, { expose }) => {
    const { caption, label } = plugins.langProps(props, "caption", "label");

    const main = ref<QExpansionItem>();

    const exposed = { main };

    validateExpose<ExpansionItem.Global>(expose, exposed);

    return {
      caption,
      label,
      main,
      slotNames: plugins.slotNames<ExpansionItem.Slots>()()
    };
  }
});
</script>

<template>
  <!-- eslint-disable-next-line vue/no-restricted-syntax -->
  <q-expansion-item
    ref="main"
    :caption="caption"
    class="m-expansion-item"
    :label="label"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
  </q-expansion-item>
</template>
