import { extras } from "@";
import * as testUtils from "@/test-utils";
import { fn } from "@skylib/functions";

test("globalMountOptions", () => {
  const options = testUtils.globalMountOptions({
    iconPickerSettings: extras.IconPicker.defaultSettings,
    languagePickerSettings: { changeLanguageAction: fn.noop, options: [] },
    pageLayoutSettings: extras.PageLayout.defaultSettings,
    resizerSettings: extras.Resizer.defaultSettings,
    sortableSettings: extras.Sortable.defaultSettings,
    switchableSettings: extras.Switchable.defaultSettings,
    tableSettings: extras.Table.defaultSettings,
    tooltipSettings: extras.Tooltip.defaultSettings
  });

  expect(options).toBeDefined();
});
