import { components, plugin } from "@";
import { o } from "@skylib/functions";
import type { App } from "vue";

test("prop: onSubmit", () => {
  const component = jest.fn();

  plugin.install?.({ component } as unknown as App);
  expect(component).toHaveBeenCalledTimes(o.size(components));
});
