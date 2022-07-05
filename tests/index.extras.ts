import { components, plugin } from "@";
import { o } from "@skylib/functions";
import type { App } from "vue";

test("prop: onSubmit", () => {
  const component = jest.fn();

  plugin.install?.({ component } as unknown as App);
  // eslint-disable-next-line @skylib/no-restricted-syntax/prefer-mockCallsToBe -- Ok
  expect(component).toHaveBeenCalledTimes(o.size(components));
});
