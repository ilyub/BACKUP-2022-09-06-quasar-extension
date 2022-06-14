import { extras } from "@";
import * as testUtils from "@/test-utils";

test("globalMountOptions", () => {
  const options = testUtils.globalMountOptions({
    baseButtonSettings: extras.BaseButton.defaultSettings.value,
    iconPickerSettings: extras.IconPicker.defaultSettings.value,
    languagePickerSettings: extras.LanguagePicker.defaultSettings.value,
    pageLayoutSettings: extras.PageLayout.defaultSettings.value,
    resizerSettings: extras.Resizer.defaultSettings.value,
    sortableSettings: extras.Sortable.defaultSettings.value,
    switchableSettings: extras.Switchable.defaultSettings.value,
    tableSettings: extras.Table.defaultSettings.value,
    tooltipSettings: extras.Tooltip.defaultSettings.value
  });

  expect(options).toBeDefined();
});
