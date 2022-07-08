import { QTab } from "quasar";
import { generic } from "@";

test("Tab", () => {
  expect(generic.Tab()).toStrictEqual(QTab);
});
