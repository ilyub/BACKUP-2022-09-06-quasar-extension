import { components, generic } from "@";

test("Select", () => {
  expect(generic.Select()).toStrictEqual(components.Select);
});
