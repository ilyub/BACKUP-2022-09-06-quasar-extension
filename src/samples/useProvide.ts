import { implementations } from "@skylib/framework";
import type { LocaleName } from "@skylib/functions";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import type { Ref } from "vue";
import { ref } from "vue";
import { components } from "..";

// eslint-disable-next-line @skylib/primary-export-only
export interface ProvidePlugin {
  readonly iconPickerTooltips: Ref<boolean>;
  readonly language: Ref<LocaleName>;
  /**
   * Provides all.
   */
  readonly provide: () => void;
  readonly switchableTransition: Ref<components.Transition>;
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

const iconPickerTooltips = ref(false);

const language = ref<LocaleName>("en-US");

const switchableTransition = ref<components.Transition>("none");

const tooltipDelay = ref(1000);

const tooltipShow = ref(true);

/**
 * Provides all.
 */
function provide(): void {
  components.provideIconPickerSettings(() => {
    return { iconTooltips: iconPickerTooltips.value };
  });

  components.provideLanguagePickerSettings(() => {
    return {
      changeLanguageAction(value): void {
        language.value = value;
        implementations.lang.dictionary.Dictionary.configure({
          localeName: value
        });
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

  components.providePageLayoutSettings(() => {
    return { closeButton: true, height: "calc(100vh - 48px)" };
  });

  components.provideTableSettings(() => {
    return {
      binaryStateSort: true,
      flat: false,
      growPageBy: 10,
      headerSeparator: true,
      square: true
    };
  });

  components.provideSortableSettings(() => {
    return {
      animationDuration: 500,
      disableDropping: false,
      disableSorting: false
    };
  });

  components.provideSwitchableSettings(() => {
    return { transition: switchableTransition.value, transitionDuration: 500 };
  });

  components.provideTooltipSettings(() => {
    return {
      delay: tooltipDelay.value,
      fontSize: undefined,
      show: tooltipShow.value
    };
  });
}
