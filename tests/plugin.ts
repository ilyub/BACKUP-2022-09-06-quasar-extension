import type { App } from "vue";

import * as assert from "@skylib/functions/es/assertions";

import { plugin } from "@/plugin";

test("plugin", () => {
  assert.not.empty(plugin.install);
  plugin.install({} as App);
});
