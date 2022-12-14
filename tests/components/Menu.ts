/* eslint jest/max-expects: [warn, { max: 4 }] -- Ok */
/* eslint-disable @skylib/no-at-sign-internal-import -- Ok */
/* eslint-disable @skylib/no-internal-modules -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QMenu } from "quasar";
import { components } from "@";
import { disableCounter } from "@/components/Tooltip.internal";
import { nextTick } from "vue";

test("Menu", async () => {
  const wrapper = vueTestUtils.mount(components.Menu, {
    global: testUtils.globalMountOptions()
  });

  const main = testUtils.findQuasarComponent(wrapper, QMenu);

  {
    main.vm.$emit("update:modelValue", true);
    await nextTick();
    expect(disableCounter.value).toBe(1);
  }

  {
    main.vm.$emit("update:modelValue", false);
    await nextTick();
    expect(disableCounter.value).toBe(0);
  }

  {
    main.vm.$emit("update:modelValue", true);
    await nextTick();
    expect(disableCounter.value).toBe(1);
  }

  {
    wrapper.unmount();
    expect(disableCounter.value).toBe(0);
  }
});
