import { extras } from "../..";
import { implementations } from "@skylib/framework";
import ru from "flag-icon-css/flags/1x1/ru.svg";
import us from "flag-icon-css/flags/1x1/us.svg";
import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import { ref } from "vue";
import type { LocaleName } from "@skylib/functions";
import type { Ref } from "vue";

/**
 * Use injections plugin.
 *
 * @returns Injections plugin.
 */
export function useInjections(): useInjections.Plugin {
  return plugin;
}

export namespace useInjections {
  export interface Plugin {
    readonly iconPickerSmall: Ref<boolean>;
    readonly iconPickerTooltips: Ref<boolean>;
    readonly language: Ref<LocaleName>;
    readonly pageLayoutCloseButton: Ref<boolean>;
    /**
     * Provides all.
     */
    readonly provide: () => void;
    readonly resizerDisable: Ref<boolean>;
    readonly switchableTransition: Ref<extras.Switchable.Transition>;
    readonly tooltipDelay: Ref<number>;
    readonly tooltipShow: Ref<boolean>;
  }
}

const plugin: useInjections.Plugin = {
  iconPickerSmall: ref(false),
  iconPickerTooltips: ref(false),
  language: ref("en-US"),
  pageLayoutCloseButton: ref(true),
  provide: () => {
    extras.IconPicker.provideSettings(() => {
      return {
        cols: plugin.iconPickerSmall.value ? 5 : 7,
        iconTooltips: plugin.iconPickerTooltips.value,
        rows: plugin.iconPickerSmall.value ? 3 : 5,
        spinnerSize: plugin.iconPickerSmall.value ? "30px" : "70px"
      };
    });

    extras.LanguagePicker.provideSettings(() => {
      return {
        changeLanguageAction: (value): void => {
          plugin.language.value = value;
          implementations.lang.dictionary.configure({ localeName: value });
        },
        options: [
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

    extras.PageLayout.provideSettings(() => {
      return {
        closeButton: plugin.pageLayoutCloseButton.value,
        height: "calc(100vh - 48px)"
      };
    });

    extras.Resizer.provideSettings(() => {
      return { disable: plugin.resizerDisable.value };
    });

    extras.Sortable.provideSettings(() => {
      return {
        animationDuration: 500,
        disableDropping: false,
        disableSorting: false
      };
    });

    extras.Switchable.provideSettings(() => {
      return {
        transition: plugin.switchableTransition.value,
        transitionDuration: 500
      };
    });

    extras.Table.provideSettings(() => {
      return {
        binaryStateSort: true,
        flat: true,
        growPageBy: 10,
        headerSeparator: true,
        square: true
      };
    });

    extras.Tooltip.provideSettings(() => {
      return {
        delay: plugin.tooltipDelay.value,
        show: plugin.tooltipShow.value
      };
    });
  },
  resizerDisable: ref(false),
  switchableTransition: ref("none"),
  tooltipDelay: ref(1000),
  tooltipShow: ref(true)
};
