import { generic } from "@";
import { QTabPanels } from "quasar";

test("TabPanels", () => {
  expect(generic.TabPanels()).toStrictEqual(QTabPanels);
});
