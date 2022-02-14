<script lang="ts">
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import type { SetupProps } from "./api";
import { propOptions } from "./api";
import IconButton from "./IconButton.vue";
import type {
  LanguagePickerItem,
  LanguagePickerOptions
} from "./LanguagePicker.extras";
import { injectLanguagePickerSettings } from "./LanguagePicker.extras";
import ListItem from "./ListItem.vue";
import Menu from "./Menu.vue";

export default defineComponent({
  name: "m-language-picker",
  components: {
    "m-icon-button": IconButton,
    "m-list-item": ListItem,
    "m-menu": Menu
  },
  props: {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    ...({} as LanguagePickerOptions),
    language: propOptions.required(is.unknown)
  },
  setup(props: SetupProps<LanguagePickerOptions>) {
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
  <m-icon-button>
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
            <img :alt="item.caption" height="18" :src="item.flag" width="18" />
          </template>
        </m-list-item>
      </q-list>
    </m-menu>
  </m-icon-button>
</template>
