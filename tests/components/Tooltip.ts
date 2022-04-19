import * as vueTestUtils from "@vue/test-utils";
import { QTooltip } from "quasar";
import { components } from "@";
import * as testUtils from "@/testUtils";

interface TestOption {
  readonly delay: number;
  readonly direction: components.Direction;
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
  const wrapper = vueTestUtils.mount(components.Tooltip, {
    global: testUtils.globalMountOptions({
      tooltipSettings: {
        delay: options.delay,
        fontSize: undefined,
        show: true
      }
    }),
    props: { direction: options.direction }
  });

  const tooltip = wrapper.findComponent(QTooltip);

  expect(tooltip.vm.delay).toStrictEqual(options.delay);
});

test("delay", () => {
  const wrapper = vueTestUtils.mount(components.Tooltip, {
    global: testUtils.globalMountOptions({
      tooltipSettings: {
        delay: 1000,
        fontSize: undefined,
        show: false
      }
    })
  });

  const tooltip = wrapper.findComponent(QTooltip);

  expect(tooltip).not.toExist();
});
