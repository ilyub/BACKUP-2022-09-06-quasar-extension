import { QTabs } from "quasar";
import { generic } from "@";

test("Tabs", () => {
  expect(generic.Tabs()).toStrictEqual(QTabs);
});
