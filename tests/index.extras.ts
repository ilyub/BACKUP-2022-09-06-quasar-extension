/* eslint-disable @skylib/custom/functions/prefer-mockCallsToBe -- Ok */

import { components, plugin } from "@";
import type { App } from "vue";
import { o } from "@skylib/functions";

test("prop: onSubmit", () => {
  const component = jest.fn();

  plugin.install?.({ component } as unknown as App);
  expect(component).toHaveBeenCalledTimes(o.size(components));
});
