import { components } from "@";

test("classRef", () => {
  expect(components.api.classRef(1).value).toBe(1);
});
