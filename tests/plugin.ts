import { plugin } from "@/plugin";
import { assert } from "@skylib/functions";
import type { App } from "vue";

test("plugin", () => {
  const component = jest.fn();

  const app = { component } as unknown as App;

  assert.not.empty(plugin.install);
  plugin.install(app);
  // eslint-disable-next-line jest/prefer-called-with
  expect(component).toHaveBeenCalled();
});
