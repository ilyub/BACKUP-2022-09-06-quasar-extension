import { classRef } from "@/components/api";

test("classRef", () => {
  expect(classRef(1).value).toBe(1);
});
