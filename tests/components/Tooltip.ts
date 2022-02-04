import { QTooltip } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import type { Direction } from "@/components/Tooltip.extras";
import Tooltip from "@/components/Tooltip.vue";
import * as testUtils from "@/testUtils";

interface TestOption {
  readonly delay: number;
  readonly direction: Direction;
  readonly show: boolean;
}

it.each<TestOption>([
  { delay: 0, direction: "down", show: true },
  { delay: 0, direction: "down-left", show: true },
  { delay: 0, direction: "down-right", show: true },
  { delay: 0, direction: "left", show: true },
  { delay: 0, direction: "left-down", show: true },
  { delay: 0, direction: "left-up", show: true },
  { delay: 0, direction: "right", show: true },
  { delay: 0, direction: "right-down", show: true },
  { delay: 0, direction: "right-up", show: true },
  { delay: 0, direction: "up", show: true },
  { delay: 0, direction: "up-left", show: true },
  { delay: 0, direction: "up-right", show: true },
  { delay: 1000, direction: "down", show: true },
  { delay: 1000, direction: "down", show: false }
])("delay", options => {
  const wrapper = vueTestUtils.mount(Tooltip, {
    global: testUtils.globalMountOptions({
      tooltipSettings: {
        delay: options.delay,
        show: options.show
      }
    }),
    props: {
      direction: options.direction
    }
  });

  const tooltip = wrapper.findComponent(QTooltip);

  if (options.show) expect(tooltip.vm.delay).toStrictEqual(options.delay);
  else expect(tooltip).not.toExist();
});
