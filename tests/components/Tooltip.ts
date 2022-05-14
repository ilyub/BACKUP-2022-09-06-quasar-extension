import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QTooltip } from "quasar";
import type { plugins } from "@";

test.each<plugins.useDirection.Direction | undefined>([
  undefined,
  "down",
  "down-left",
  "down-right",
  "left",
  "left-down",
  "left-up",
  "right",
  "right-down",
  "right-up",
  "up",
  "up-left",
  "up-right"
])("Tooltip", direction => {
  const wrapper = vueTestUtils.mount(components.Tooltip, {
    global: testUtils.globalMountOptions(),
    props: { direction }
  });

  const main = wrapper.findComponent(QTooltip);

  expect(main).toExist();
});
