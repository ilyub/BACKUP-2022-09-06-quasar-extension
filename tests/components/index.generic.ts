import { generic } from "@";
import { o } from "@skylib/functions";

test("generic", () => {
  expect(o.values(generic)).toBeDefined();
});
