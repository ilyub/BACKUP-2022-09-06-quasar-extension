import type { Entry, WritableRecord } from "@skylib/functions";
import { components, extras, toComputed } from "..";
import { evaluate, o } from "@skylib/functions";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";

export namespace globalMountOptions {
  export interface CustomOptions {
    readonly baseButtonSettings?: extras.BaseButton.Settings;
    readonly formExposeDown?: extras.Form.ExposeDown;
    readonly iconPickerSettings?: extras.IconPicker.Settings;
    readonly languagePickerSettings?: extras.LanguagePicker.Settings;
    readonly menuExposeDown?: extras.Menu.ExposeDown;
    readonly pageLayoutSettings?: extras.PageLayout.Settings;
    readonly resizerSettings?: extras.Resizer.Settings;
    readonly sortableSettings?: extras.Sortable.Settings;
    readonly switchableSettings?: extras.Switchable.Settings;
    readonly tableSettings?: extras.Table.Settings;
    readonly tooltipSettings?: extras.Tooltip.Settings;
  }
}

/**
 * Creates global mount options.
 *
 * @param options - Options.
 * @returns Global mount options.
 */
export function globalMountOptions(
  options: globalMountOptions.CustomOptions = {}
): GlobalMountOptions {
  return {
    components: o.fromEntries.exhaustive(
      o
        .values(components)
        .map((component): Entry<string, object> => [component.name, component])
    ),
    provide: evaluate((): WritableRecord<symbol, unknown> => {
      const {
        BaseButton,
        Form,
        IconPicker,
        LanguagePicker,
        Menu,
        PageLayout,
        Resizer,
        Sortable,
        Switchable,
        Table,
        Tooltip
      } = extras;

      const {
        baseButtonSettings,
        formExposeDown,
        iconPickerSettings,
        languagePickerSettings,
        menuExposeDown,
        pageLayoutSettings,
        resizerSettings,
        sortableSettings,
        switchableSettings,
        tableSettings,
        tooltipSettings
      } = options;

      const provide: WritableRecord<symbol, unknown> = {};

      if (baseButtonSettings)
        o.assign(
          provide,
          BaseButton.testProvideSettings(toComputed(baseButtonSettings))
        );

      if (formExposeDown)
        o.assign(provide, Form.testProvideForm(formExposeDown));

      if (iconPickerSettings)
        o.assign(
          provide,
          IconPicker.testProvideSettings(toComputed(iconPickerSettings))
        );

      if (languagePickerSettings)
        o.assign(
          provide,
          LanguagePicker.testProvideSettings(toComputed(languagePickerSettings))
        );

      if (menuExposeDown)
        o.assign(provide, Menu.testProvideMenu(menuExposeDown));

      if (pageLayoutSettings)
        o.assign(
          provide,
          PageLayout.testProvideSettings(toComputed(pageLayoutSettings))
        );

      if (resizerSettings)
        o.assign(
          provide,
          Resizer.testProvideSettings(toComputed(resizerSettings))
        );

      if (sortableSettings)
        o.assign(
          provide,
          Sortable.testProvideSettings(toComputed(sortableSettings))
        );

      if (switchableSettings)
        o.assign(
          provide,
          Switchable.testProvideSettings(toComputed(switchableSettings))
        );

      if (tableSettings)
        o.assign(provide, Table.testProvideSettings(toComputed(tableSettings)));

      if (tooltipSettings)
        o.assign(
          provide,
          Tooltip.testProvideSettings(toComputed(tooltipSettings))
        );

      return provide;
    })
  };
}
