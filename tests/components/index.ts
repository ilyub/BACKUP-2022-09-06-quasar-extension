import { components } from "@";

test("index", () => {
  expect(components.isTableState).toBeDefined();
  expect(components.provideResizerSettings).toBeDefined();
  expect(components.provideIconPickerSettings).toBeDefined();
  expect(components.provideLanguagePickerSettings).toBeDefined();
  expect(components.providePageLayoutSettings).toBeDefined();
  expect(components.provideSortableSettings).toBeDefined();
  expect(components.provideSwitchableSettings).toBeDefined();
  expect(components.provideTableSettings).toBeDefined();
  expect(components.provideTooltipSettings).toBeDefined();
});
