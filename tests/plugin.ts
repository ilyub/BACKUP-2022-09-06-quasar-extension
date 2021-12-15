import type { App } from "vue";

import { plugin } from "@/plugin";

it("plugin", () => {
  const component = jest.fn();

  const app = { component } as unknown as App;

  plugin.install?.(app);
  expect(component).toBeCalledTimes(10);
});
