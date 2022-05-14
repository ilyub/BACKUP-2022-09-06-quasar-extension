import { generic, components } from "@";

test("Group", () => {
  expect(generic.Group()).toStrictEqual(components.Group);
});
