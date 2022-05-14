import { generic, components } from "@";

test("Select", () => {
  expect(generic.Select()).toStrictEqual(components.Select);
});
