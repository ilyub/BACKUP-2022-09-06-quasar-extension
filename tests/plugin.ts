import type { App } from "vue";

import * as assert from "@skylib/functions/es/assertions";

import { plugin } from "@/plugin";

test("plugin", () => {
  assert.not.empty(plugin.install);
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  plugin.install({} as App);
});
