import { QTooltip } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import type { Direction } from "@/components/Tooltip.extras";
import Tooltip from "@/components/Tooltip.vue";
import * as testUtils from "@/testUtils";

interface TestOption {
  readonly delay: number;
  readonly direction: Direction;
}

test.each<TestOption>([
  { delay: 0, direction: "down" },
  { delay: 0, direction: "down-left" },
  { delay: 0, direction: "down-right" },
  { delay: 0, direction: "left" },
  { delay: 0, direction: "left-down" },
  { delay: 0, direction: "left-up" },
  { delay: 0, direction: "right" },
  { delay: 0, direction: "right-down" },
  { delay: 0, direction: "right-up" },
  { delay: 0, direction: "up" },
  { delay: 0, direction: "up-left" },
  { delay: 0, direction: "up-right" },
  { delay: 1000, direction: "down" }
])("delay", options => {
  const wrapper = vueTestUtils.mount(Tooltip, {
    global: testUtils.globalMountOptions({
      tooltipSettings: {
        delay: options.delay,
        show: true
      }
    }),
    props: {
      direction: options.direction
    }
  });

  const tooltip = wrapper.findComponent(QTooltip);

  expect(tooltip.vm.delay).toStrictEqual(options.delay);
});

test("delay", () => {
  const wrapper = vueTestUtils.mount(Tooltip, {
    global: testUtils.globalMountOptions({
      tooltipSettings: {
        delay: 1000,
        show: false
      }
    })
  });

  const tooltip = wrapper.findComponent(QTooltip);

  expect(tooltip).not.toExist();
});
