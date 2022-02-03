<script lang="ts">
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import type { XBaseButtonProps } from "./XBaseButton";
import XIconButton from "./XIconButton.vue";
import type { LanguagePickerItem } from "./XLanguagePicker.extras";
import { injectLanguagePickerSettings } from "./XLanguagePicker.extras";
import XMenu from "./XMenu.vue";
import XMenuItem from "./XMenuItem.vue";

export default defineComponent({
  name: "x-language-picker",
  components: {
    "x-icon-button": XIconButton,
    "x-menu": XMenu,
    "x-menu-item": XMenuItem
  },
  props: {
    ...({} as PropsToPropOptions<XBaseButtonProps>),
    language: propOptions.required(is.unknown)
  },
  setup(props) {
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
      settings
    };
  }
});
</script>

<template>
  <x-icon-button>
    <img
      :alt="activeItem.caption"
      height="20"
      :src="activeItem.flag"
      width="20"
    />
    <x-menu>
      <q-list>
        <x-menu-item
          v-for="(item, index) in settings.items"
          :key="index"
          :caption="item.caption"
          :class="`menu-item-${index}`"
          @click="changeLanguage(item.lang)"
        >
          <template #icon>
            <img :alt="item.caption" height="18" :src="item.flag" width="18" />
          </template>
        </x-menu-item>
      </q-list>
    </x-menu>
  </x-icon-button>
</template>
