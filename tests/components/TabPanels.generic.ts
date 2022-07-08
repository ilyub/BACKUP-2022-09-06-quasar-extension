import { QTabPanels } from "quasar";
import { generic } from "@";

test("TabPanels", () => {
  expect(generic.TabPanels()).toStrictEqual(QTabPanels);
});
