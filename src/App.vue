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

import { providePageOffset } from "./components/api/pageContentHeight";
import { provideIconPickerSettings } from "./components/IconPicker.extras";
import Knob from "./components/Knob.vue";
import { provideLanguagePickerSettings } from "./components/LanguagePicker.extras";
import LanguagePicker from "./components/LanguagePicker.vue";
import type { OptionGroupOptions } from "./components/OptionGroup.extras";
import OptionGroup from "./components/OptionGroup.vue";
import { providePageLayoutSettings } from "./components/PageLayout.extras";
import PageSection from "./components/PageSection.vue";
import { providePageTableSettings } from "./components/PageTable.extras";
import Section from "./components/Section.vue";
import { provideSortableSettings } from "./components/Sortable.extras";
import Subsection from "./components/Subsection.vue";
import type { Transition } from "./components/Switchable.extras";
import { provideSwitchableSettings } from "./components/Switchable.extras";
import Toggle from "./components/Toggle.vue";
import { provideTooltipSettings } from "./components/Tooltip.extras";
import All from "./samples/All.vue";

export default defineComponent({
  name: "app",
  components: {
    "all-samples": All,
    "m-knob": Knob,
    "m-language-picker": LanguagePicker,
    "m-option-group": OptionGroup,
    "m-page-section": PageSection,
    "m-section": Section,
    "m-subsection": Subsection,
    "m-toggle": Toggle
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
    <m-page-section>
      <m-section>
        <q-checkbox v-model="iconTooltips" label="Icon tooltips:" left-label />
      </m-section>
      <m-section>
        <m-subsection>
          <m-toggle v-model="tooltipShow" label="Show tooltips:" left-label />
        </m-subsection>
        <m-subsection indent>
          with delay of
          <m-knob
            v-model="tooltipDelay"
            :disable="!tooltipShow"
            inline
            :max="3000"
            :step="100"
          />
          ms
        </m-subsection>
      </m-section>
      <m-section>
        Language:
        <m-language-picker :language="language" />
        {{ lang.SampleWord }}
      </m-section>
      <m-section>
        Transition:
        <m-option-group
          v-model="switchableTransition"
          inline
          :options="switchableTransitionOptions"
        />
      </m-section>
    </m-page-section>
    <m-page-section>
      <all-samples />
    </m-page-section>
  </div>
</template>
