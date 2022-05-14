import { generic } from "@";
import { QTab } from "quasar";

test("Tab", () => {
  expect(generic.Tab()).toStrictEqual(QTab);
});
