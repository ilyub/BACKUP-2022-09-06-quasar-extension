import { components, extras } from "..";
import { fn, o } from "@skylib/functions";
import type { WritableRecord } from "@skylib/functions";
import type { GlobalMountOptions } from "@vue/test-utils/dist/types";

export * as mocks from "./mocks";

/**
 * Creates global mount options.
 *
 * @param options - Options.
 * @returns Global mount options.
 */
export function globalMountOptions(
  options: globalMountOptions.CustomOptions = {}
  // eslint-disable-next-line @skylib/no-mutable-signature -- Ok
): GlobalMountOptions {
  return {
    components: o.fromEntries.exhaustive(
      o.values(components).map(component => [component.name, component])
    ),
    provide: fn.run(() => {
      const {
        BaseButton,
        IconPicker,
        LanguagePicker,
        PageLayout,
        Resizer,
        Sortable,
        Switchable,
        Table,
        Tooltip
      } = extras;

      const {
        baseButtonSettings,
        iconPickerSettings,
        languagePickerSettings,
        pageLayoutSettings,
        resizerSettings,
        sortableSettings,
        switchableSettings,
        tableSettings,
        tooltipSettings
      } = options;

      const provide: WritableRecord<symbol, unknown> = {};

      if (baseButtonSettings)
        o.assign(provide, BaseButton.testProvideSettings(baseButtonSettings));

      if (iconPickerSettings)
        o.assign(provide, IconPicker.testProvideSettings(iconPickerSettings));

      if (languagePickerSettings)
        o.assign(
          provide,
          LanguagePicker.testProvideSettings(languagePickerSettings)
        );

      if (pageLayoutSettings)
        o.assign(provide, PageLayout.testProvideSettings(pageLayoutSettings));

      if (resizerSettings)
        o.assign(provide, Resizer.testProvideSettings(resizerSettings));

      if (sortableSettings)
        o.assign(provide, Sortable.testProvideSettings(sortableSettings));

      if (switchableSettings)
        o.assign(provide, Switchable.testProvideSettings(switchableSettings));

      if (tableSettings)
        o.assign(provide, Table.testProvideSettings(tableSettings));

      if (tooltipSettings)
        o.assign(provide, Tooltip.testProvideSettings(tooltipSettings));

      return provide;
    })
  };
}

export namespace globalMountOptions {
  export interface CustomOptions {
    readonly baseButtonSettings?: extras.BaseButton.Settings;
    readonly iconPickerSettings?: extras.IconPicker.Settings;
    readonly languagePickerSettings?: extras.LanguagePicker.Settings;
    readonly pageLayoutSettings?: extras.PageLayout.Settings;
    readonly resizerSettings?: extras.Resizer.Settings;
    readonly sortableSettings?: extras.Sortable.Settings;
    readonly switchableSettings?: extras.Switchable.Settings;
    readonly tableSettings?: extras.Table.Settings;
    readonly tooltipSettings?: extras.Tooltip.Settings;
  }
}
