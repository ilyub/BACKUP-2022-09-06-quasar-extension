import "typeface-roboto-multilang/cyrillic.css";
import "typeface-roboto-multilang/latin-ext.css";
import type { LocaleName, Writable } from "@skylib/functions";
import { computed, ref } from "vue";
import enGb from "date-fns/locale/en-GB";
import enUs from "date-fns/locale/en-US";
import { extras } from "../..";
import gb from "flag-icon-css/flags/1x1/gb.svg";
import { implementations } from "@skylib/framework";
import { lang } from "@skylib/facades";
import ru from "flag-icon-css/flags/1x1/ru.svg";
// eslint-disable-next-line @skylib/consistent-import -- Ok
import ruRu from "date-fns/locale/ru";
import us from "flag-icon-css/flags/1x1/us.svg";

export const settings = {
  baseButtonAnimateAsyncClick: ref(true),
  baseButtonAnimateSubmitting: ref(true),
  iconPickerCompact: ref(false),
  iconPickerTooltips: ref(false),
  language: ref<LocaleName>("en-US"),
  pageLayoutCloseButton: ref(true),
  /**
   * Provides settings.
   */
  provide: () => {
    extras.BaseButton.provideSettings(
      computed(
        (): extras.BaseButton.Settings => ({
          animateAsyncClick: settings.baseButtonAnimateAsyncClick.value,
          animateSubmitting: settings.baseButtonAnimateSubmitting.value
        })
      )
    );
    extras.IconPicker.provideSettings(
      computed(
        (): extras.IconPicker.Settings => ({
          cols: settings.iconPickerCompact.value ? 5 : 7,
          iconTooltips: settings.iconPickerTooltips.value,
          rows: settings.iconPickerCompact.value ? 3 : 5,
          spinnerSize: settings.iconPickerCompact.value ? "30px" : "70px"
        })
      )
    );
    extras.LanguagePicker.provideSettings(
      computed(
        (): extras.LanguagePicker.Settings => ({
          changeLanguageAction: (value): void => {
            const config: Writable<implementations.datetime.dateFnsWrapper.Configuration> =
              { firstDayOfWeek: 0, locale: enUs, pm: true };

            switch (value) {
              case "en-GB":
                config.locale = enGb;

                break;

              case "en-US":
                break;

              case "ru-RU":
                config.firstDayOfWeek = 1;
                config.locale = ruRu;
                config.pm = false;
            }

            settings.language.value = value;
            implementations.datetime.dateFnsWrapper.configure(config);
            implementations.lang.dictionary.configure({ localeName: value });
          },
          options: [
            { caption: lang.keys.EnglishUSA, flag: us, lang: "en-US" },
            { caption: lang.keys.EnglishUK, flag: gb, lang: "en-GB" },
            { caption: lang.keys.Russian, flag: ru, lang: "ru-RU" }
          ]
        })
      )
    );
    extras.PageLayout.provideSettings(
      computed(
        (): extras.PageLayout.Settings => ({
          closeButton: settings.pageLayoutCloseButton.value,
          height: "calc(100vh - 48px)"
        })
      )
    );
    extras.Resizer.provideSettings(
      computed(
        (): extras.Resizer.Settings => ({
          disable: settings.resizerDisable.value
        })
      )
    );
    extras.Sortable.provideSettings(
      computed(
        (): extras.Sortable.Settings => ({
          animationDuration: 500,
          disableDropping: false,
          disableSorting: false
        })
      )
    );
    extras.Switchable.provideSettings(
      computed(
        (): extras.Switchable.Settings => ({
          transition: settings.switchableTransition.value,
          transitionDuration: 500
        })
      )
    );
    extras.Table.provideSettings(
      computed(
        (): extras.Table.Settings => ({
          binaryStateSort: true,
          flat: true,
          growPageBy: 10,
          headerSeparator: true,
          square: true
        })
      )
    );
    extras.Tooltip.provideSettings(
      computed(
        (): extras.Tooltip.Settings => ({
          delay: settings.tooltipDelay.value,
          show: settings.tooltipShow.value
        })
      )
    );
  },
  resizerDisable: ref(false),
  switchableTransition: ref(extras.Switchable.Transition.none),
  tooltipDelay: ref(1000),
  tooltipShow: ref(true)
} as const;
