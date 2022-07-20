<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
  directives,
  parentProps,
  plugins,
  propFactory,
  validateProps
} from "./api";
import type { Exposed } from "./api";
import type { IconButton } from "./IconButton.extras";
import { LanguagePicker } from "./LanguagePicker.extras";
import { as } from "@skylib/functions";

const prop = propFactory<LanguagePicker.OwnProps>();

export default defineComponent({
  name: "m-language-picker",
  directives: { debugId: directives.debugId("language-picker") },
  props: {
    ...parentProps<LanguagePicker.ParentProps>(),
    language: prop.required("language")
  },
  setup: (props, { expose }) => {
    const main = ref<IconButton.Global>();

    const settings = LanguagePicker.injectSettings();

    const exposed: Exposed<LanguagePicker.Global> = { main };

    validateProps<LanguagePicker.OwnProps>(props);
    expose(exposed);

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
