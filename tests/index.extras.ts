import { components, plugin } from "@";
import { o } from "@skylib/functions";
import type { App } from "vue";

test("prop: onSubmit", () => {
  const component = jest.fn();

  plugin.install?.({ component } as unknown as App);
  // eslint-disable-next-line @skylib/functions/no-restricted-syntax -- Ok
  expect(component).toHaveBeenCalledTimes(o.size(components));
});
