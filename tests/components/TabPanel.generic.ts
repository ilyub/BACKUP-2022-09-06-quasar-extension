import { generic } from "@";
import { QTabPanel } from "quasar";

test("TabPanel", () => {
  expect(generic.TabPanel()).toStrictEqual(QTabPanel);
});
