import type { App } from "vue";

import * as o from "@skylib/functions/es/object";

import { components } from "@/components";
import { plugin } from "@/plugin";

it("plugin", () => {
  const component = jest.fn();

  const app = { component } as unknown as App;

  plugin.install?.(app);
  expect(component).toBeCalledTimes(o.size(components));
});
