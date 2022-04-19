import { assert } from "@skylib/functions";
import type { App } from "vue";
import { plugin } from "@/plugin";

test("plugin", () => {
  const component = jest.fn();

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const app = { component } as unknown as App;

  assert.not.empty(plugin.install);
  plugin.install(app);
  // eslint-disable-next-line jest/prefer-called-with
  expect(component).toHaveBeenCalled();
});
