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
    disable: false
  },
  {
    disable: false,
    on: true,
    switchableSettings: switchableSettings1
  },
  {
    disable: true,
    on: false,
    switchableSettings: switchableSettings2
  }
])("switchable", ({ disable, on, switchableSettings }) => {
  expect.assertions(1);

  vueTestUtils.mount(Switchable, {
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
          expect(injectDisable().value).toStrictEqual(disable);
        },
        template: "<div></div>"
      }
    }
  });
});
