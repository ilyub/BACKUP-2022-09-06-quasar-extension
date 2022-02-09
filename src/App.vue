<script lang="ts">
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import { defineComponent, ref } from "vue";

import { lang } from "@skylib/facades/es/lang";
import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import * as fn from "@skylib/functions/es/function";
import type { LocaleName } from "@skylib/functions/es/types/locales";

import All from "./chore/All.vue";
import { providePageOffset } from "./components/api/pageContentHeight";
import { provideIconPickerSettings } from "./components/IconPicker.extras";
import Knob from "./components/Knob.vue";
import { provideLanguagePickerSettings } from "./components/LanguagePicker.extras";
import LanguagePicker from "./components/LanguagePicker.vue";
import type { OptionGroupOptions } from "./components/OptionGroup.extras";
import OptionGroup from "./components/OptionGroup.vue";
import { providePageLayoutSettings } from "./components/PageLayout.extras";
import { providePageTableSettings } from "./components/PageTable.extras";
import { provideSortableSettings } from "./components/Sortable.extras";
import type { Transition } from "./components/Switchable.extras";
import { provideSwitchableSettings } from "./components/Switchable.extras";
import Toggle from "./components/Toggle.vue";
import { provideTooltipSettings } from "./components/Tooltip.extras";

export default defineComponent({
  name: "app",
  components: {
    "all-samples": All,
    "x-knob": Knob,
    "x-language-picker": LanguagePicker,
    "x-option-group": OptionGroup,
    "x-toggle": Toggle
  },
  setup() {
    const iconTooltips = ref(false);

    const language = ref<LocaleName>("en-US");

    const switchableTransition = ref<Transition>("fade");

    const tooltipDelay = ref(1000);

    const tooltipShow = ref(true);

    provideIconPickerSettings(() => {
      return {
        iconTooltips: iconTooltips.value
      };
    });

    provideLanguagePickerSettings(() => {
      return {
        changeLanguageAction(value): void {
          language.value = value;
          Dictionary.configure({ localeName: value });
        },
        items: [
          {
            caption: "English (USA)",
            flag: us,
            lang: "en-US"
          },
          {
            caption: "Russian",
            flag: ru,
            lang: "ru-RU"
          }
        ]
      };
    });

    providePageLayoutSettings(() => {
      return {
        closeButton: true,
        headerHeight: "50px",
        paddingX: "10px",
        paddingY: "20px"
      };
    });

    providePageTableSettings(() => {
      return {
        growPageBy: 10
      };
    });

    providePageOffset(() => "20px");

    provideSortableSettings(() => {
      return {
        animationDuration: 500
      };
    });

    provideSwitchableSettings(() => {
      return {
        fadeOpacity: 0.5,
        transition: switchableTransition.value,
        transitionDuration: 500
      };
    });

    provideTooltipSettings(() => {
      return {
        delay: tooltipDelay.value,
        show: tooltipShow.value
      };
    });

    return {
      iconTooltips,
      lang,
      language,
      switchableTransition,
      switchableTransitionOptions: fn.run<OptionGroupOptions<Transition>>(
        () => [
          {
            label: "Fade",
            value: "fade"
          },
          {
            label: "Slide",
            value: "slide"
          }
        ]
      ),
      tooltipDelay,
      tooltipShow
    };
  }
});
</script>

<template>
  <div class="q-ma-xl">
    <div>
      <q-checkbox
        v-model="iconTooltips"
        class="q-ml-md"
        label="Icon tooltips"
      />
    </div>
    <div>
      Show tooltips:
      <x-toggle v-model="tooltipShow" />
      with delay of
      <x-knob
        v-model="tooltipDelay"
        class="q-ml-sm q-mr-sm"
        :disable="!tooltipShow"
        :max="3000"
        :step="100"
      />
      ms
    </div>
    <div>
      <x-language-picker :language="language" />
      {{ lang.SampleWord }}
    </div>
    <div>
      Transition:
      <x-option-group
        v-model="switchableTransition"
        class="inline-block"
        inline
        :options="switchableTransitionOptions"
      />
    </div>
    <all-samples />
  </div>
  >
</template>
