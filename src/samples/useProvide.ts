import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import type { Ref } from "vue";
import { ref } from "vue";

import { Dictionary } from "@skylib/framework/es/facade-implementations/lang/dictionary";
import type { LocaleName } from "@skylib/functions/es/types/locales";

import { provideIconPickerSettings } from "../components/IconPicker.extras";
import { provideLanguagePickerSettings } from "../components/LanguagePicker.extras";
import { providePageLayoutSettings } from "../components/PageLayout.extras";
import { provideSortableSettings } from "../components/Sortable.extras";
import type { Transition } from "../components/Switchable.extras";
import { provideSwitchableSettings } from "../components/Switchable.extras";
import { provideTableSettings } from "../components/Table.extras";
import { provideTooltipSettings } from "../components/Tooltip.extras";

export interface ProvidePlugin {
  readonly iconPickerTooltips: Ref<boolean>;
  readonly language: Ref<LocaleName>;
  /**
   * Provides all.
   */
  readonly provide: () => void;
  readonly switchableTransition: Ref<Transition>;
  readonly tooltipDelay: Ref<number>;
  readonly tooltipShow: Ref<boolean>;
}

/**
 * Returns provide plugin.
 *
 * @returns Provid plugin.
 */
export function useProvide(): ProvidePlugin {
  return {
    iconPickerTooltips,
    language,
    provide,
    switchableTransition,
    tooltipDelay,
    tooltipShow
  };
}

/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/

const iconPickerTooltips = ref(false);

const language = ref<LocaleName>("en-US");

const switchableTransition = ref<Transition>("none");

const tooltipDelay = ref(1000);

const tooltipShow = ref(true);

/**
 * Provides all.
 */
function provide(): void {
  provideIconPickerSettings(() => {
    return {
      iconTooltips: iconPickerTooltips.value
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
      height: "calc(100vh - 48px)"
    };
  });

  provideTableSettings(() => {
    return {
      binaryStateSort: false,
      flat: false,
      growPageBy: 10,
      square: false
    };
  });

  provideSortableSettings(() => {
    return {
      animationDuration: 500,
      disableDropping: false,
      disableSorting: false
    };
  });

  provideSwitchableSettings(() => {
    return {
      transition: switchableTransition.value,
      transitionDuration: 500
    };
  });

  provideTooltipSettings(() => {
    return {
      delay: tooltipDelay.value,
      fontSize: undefined,
      show: tooltipShow.value
    };
  });
}
