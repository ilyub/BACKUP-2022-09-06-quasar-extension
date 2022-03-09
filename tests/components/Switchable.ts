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

test.each([
  {
    expected: false
  },
  {
    disable: false,
    expected: false,
    switchableSettings: switchableSettings1
  },
  {
    disable: true,
    expected: true,
    switchableSettings: switchableSettings2
  }
])("switchable", ({ disable, expected, switchableSettings }) => {
  expect.assertions(1);

  vueTestUtils.mount(Switchable, {
    global: testUtils.globalMountOptions(
      o.removeUndefinedKeys({
        switchableSettings
      })
    ),
    props: o.removeUndefinedKeys({
      disable
    }),
    slots: {
      default: {
        setup() {
          expect(injectDisable().value).toStrictEqual(expected);
        },
        template: "<div></div>"
      }
    }
  });
});
