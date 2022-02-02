<script lang="ts">
import { computed, defineComponent } from "vue";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import type { BaseButtonProps } from "./BaseButton";
import type { LanguagePickerItem } from "./LanguagePicker.extras";
import { injectLanguagePickerSettings } from "./LanguagePicker.extras";
import Menu from "./Menu.vue";
import MenuItem from "./MenuItem.vue";
import NavButton from "./NavButton.vue";

export default defineComponent({
  name: "s-language-picker",
  components: {
    "s-menu": Menu,
    "s-menu-item": MenuItem,
    "s-nav-button": NavButton
  },
  props: {
    ...({} as PropsToPropOptions<BaseButtonProps>),
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
  <s-nav-button>
    <img
      :alt="activeItem.caption"
      height="20"
      :src="activeItem.flag"
      width="20"
    />
    <s-menu>
      <q-list>
        <s-menu-item
          v-for="(item, index) in settings.items"
          :key="index"
          :caption="item.caption"
          :class="`menu-item-${index}`"
          @click="changeLanguage(item.lang)"
        >
          <template #icon>
            <img :alt="item.caption" height="18" :src="item.flag" width="18" />
          </template>
        </s-menu-item>
      </q-list>
    </s-menu>
  </s-nav-button>
</template>
