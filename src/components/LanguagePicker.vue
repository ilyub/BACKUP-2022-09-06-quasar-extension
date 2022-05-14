<script lang="ts">
import { LanguagePicker } from "./LanguagePicker.extras";
import { prop, parentProps, validateProps, plugins, directives } from "./api";
import { as } from "@skylib/functions";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "m-language-picker",
  directives: { debugId: directives.debugId("language-picker") },
  props: {
    ...parentProps<LanguagePicker.ParentProps>(),
    language: prop.required<LanguagePicker.Props["language"]>()
  },
  setup: props => {
    validateProps<LanguagePicker.OwnProps>(props);

    const settings = LanguagePicker.injectSettings();

    return {
      activeOption: computed(() =>
        as.not.empty(
          settings.value.options.find(
            candidate => candidate.lang === props.language
          )
        )
      ),
      settings,
      slotNames: plugins.useSlotNames<LanguagePicker.Slots>()("default")
    };
  }
});
</script>

<template>
  <m-icon-button class="m-language-picker">
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #default>
      <slot :name="slotNames.default">
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
