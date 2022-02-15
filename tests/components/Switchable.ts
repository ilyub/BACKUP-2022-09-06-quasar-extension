import * as vueTestUtils from "@vue/test-utils";

import * as o from "@skylib/functions/es/object";

import type { SwitchableSettings } from "@/components/Switchable.extras";
import { injectDisable } from "@/components/Switchable.extras";
import Switchable from "@/components/Switchable.vue";
import * as testUtils from "@/testUtils";

const switchableSettings1: SwitchableSettings = {
  transition: "none",
  transitionDuration: 300
};

const switchableSettings2: SwitchableSettings = {
  transition: "slide",
  transitionDuration: 400
};

it.each([
  {},
  {
    on: true,
    switchableSettings: switchableSettings1
  },
  {
    on: false,
    switchableSettings: switchableSettings2
  }
])("Switchable", ({ on, switchableSettings }) => {
  const injectDisableCallback = jest.fn();

  const wrapper = vueTestUtils.mount(Switchable, {
    global: testUtils.globalMountOptions(
      o.removeUndefinedKeys({
        switchableSettings
      })
    ),
    props: o.removeUndefinedKeys({
      on
    }),
    slots: {
      default: {
        setup() {
          injectDisableCallback(injectDisable().value);
        },
        template: "<div></div>"
      }
    }
  });

  expect(injectDisableCallback).toBeCalledTimes(1);
  expect(injectDisableCallback).lastCalledWith(!(on ?? true));
  expect(wrapper).toExist();
});
