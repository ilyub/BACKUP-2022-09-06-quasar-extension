<script lang="ts">
import * as assert from "@skylib/functions/es/assertions";
import { computed, defineComponent } from "vue";
import type {
  LanguagePickerItem,
  LanguagePickerOwnProps,
  LanguagePickerParentProps,
  LanguagePickerSlots
} from "./LanguagePicker.extras";
import { injectLanguagePickerSettings } from "./LanguagePicker.extras";
import { prop, propsToPropDefinitions, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";

export default defineComponent({
  name: "m-language-picker",
  props: {
    ...propsToPropDefinitions<LanguagePickerParentProps>(),
    language: prop()
  },
  setup(props) {
    validateProps<LanguagePickerOwnProps>(props);

    const settings = injectLanguagePickerSettings();

    return {
      activeItem: computed<LanguagePickerItem>(() => {
        const item = settings.value.items.find(
          candidate => candidate.lang === props.language
        );

        assert.not.empty(item);

        return item;
      }),
      changeLanguage(newLanguage: unknown): void {
        const item = settings.value.items.find(
          candidate => candidate.lang === newLanguage
        );

        assert.not.empty(item);
        settings.value.changeLanguageAction(item.lang);
      },
      settings,
      slotNames: useSlotsNames<LanguagePickerSlots>()("default")
    };
  }
});
</script>

<template>
  <m-icon-button class="m-language-picker">
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #default>
      <slot :name="slotNames.default">
        <img
          :alt="activeItem.caption"
          height="20"
          :src="activeItem.flag"
          width="20"
        />
        <m-menu auto-close>
          <q-list>
            <m-list-item
              v-for="(item, index) in settings.items"
              :key="index"
              :caption="item.caption"
              :class="`menu-item-${index}`"
              @click="changeLanguage(item.lang)"
            >
              <template #icon>
                <img
                  :alt="item.caption"
                  height="18"
                  :src="item.flag"
                  width="18"
                />
              </template>
            </m-list-item>
          </q-list>
        </m-menu>
      </slot>
    </template>
  </m-icon-button>
</template>
