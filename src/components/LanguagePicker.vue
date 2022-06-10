<script lang="ts">
import { LanguagePicker } from "./LanguagePicker.extras";
import {
  directives,
  parentProps,
  plugins,
  prop,
  validateExpose,
  validateProps
} from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { IconButton } from "./IconButton.extras";

export default defineComponent({
  name: "m-language-picker",
  directives: { debugId: directives.debugId("language-picker") },
  props: {
    ...parentProps<LanguagePicker.ParentProps>(),
    language: prop.required<LanguagePicker.Props["language"]>()
  },
  setup: (props, { expose }) => {
    const exposed = { main: computed(() => as.not.empty(main.value)) };

    const main = ref<IconButton.Global>();

    const settings = LanguagePicker.injectSettings();

    validateExpose<LanguagePicker.Global>(expose, exposed);
    validateProps<LanguagePicker.OwnProps>(props);

    return {
      activeOption: computed(() =>
        as.not.empty(
          settings.value.options.find(
            candidate => candidate.lang === props.language
          )
        )
      ),
      main,
      settings,
      slotNames: plugins.slotNames<LanguagePicker.Slots>()("default")
    };
  }
});
</script>

<template>
  <m-icon-button ref="main" class="m-language-picker">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #default="data">
      <slot :name="slotNames.default" v-bind="data ?? {}">
        <img
          :alt="activeOption.caption"
          height="20"
          :src="activeOption.flag"
          width="20"
        />
        <m-menu auto-close>
          <q-list>
            <m-menu-item
              v-for="(option, index) in settings.options"
              :key="index"
              v-debug-id="'menu-item'"
              :caption="option.caption"
              :class="`menu-item-${index}`"
              @click="settings.changeLanguageAction(option.lang)"
            >
              <template #icon>
                <img
                  :alt="option.caption"
                  height="18"
                  :src="option.flag"
                  width="18"
                />
              </template>
            </m-menu-item>
          </q-list>
        </m-menu>
      </slot>
    </template>
  </m-icon-button>
</template>
