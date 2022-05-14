import { classRef } from "@";

test("classRef", () => {
  expect(classRef(1).value).toBe(1);
});
