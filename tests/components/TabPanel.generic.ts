import { QTabPanel } from "quasar";
import { generic } from "@";

test("TabPanel", () => {
  expect(generic.TabPanel()).toStrictEqual(QTabPanel);
});
