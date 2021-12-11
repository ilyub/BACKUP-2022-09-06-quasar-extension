import { QTooltip } from "quasar";
import { computed } from "vue";
import * as testUtils from "@vue/test-utils";

import NavButton from "@/components/NavButton.vue";
import type { TooltipSettings } from "@/components/Tooltip.extras";
import { injectTooltipSettings } from "@/components/Tooltip.extras";

it("prop: tooltip", () => {
  {
    const tooltipSettings = { delay: 1000, show: true };

    const wrapper = testUtils.mount(NavButton, {
      global: {
        provide: {
          [injectTooltipSettings as symbol]: computed<TooltipSettings>(
            () => tooltipSettings
          )
        }
      },
      props: {
        tooltip: "sample-tooltip"
      }
    });

    expect(wrapper.findComponent(QTooltip)).toExist();
  }

  {
    const tooltipSettings = { delay: 1000, show: true };

    const wrapper = testUtils.mount(NavButton, {
      global: {
        provide: {
          [injectTooltipSettings as symbol]: computed<TooltipSettings>(
            () => tooltipSettings
          )
        }
      }
    });

    expect(wrapper.findComponent(QTooltip)).not.toExist();
  }
});

it("slot: default", () => {
  const tooltipSettings = { delay: 1000, show: true };

  const wrapper = testUtils.mount(NavButton, {
    global: {
      provide: {
        [injectTooltipSettings as symbol]: computed<TooltipSettings>(
          () => tooltipSettings
        )
      }
    },
    slots: {
      default: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
