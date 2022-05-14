import { generic } from "@";
import { QTabs } from "quasar";

test("Tabs", () => {
  expect(generic.Tabs()).toStrictEqual(QTabs);
});
