import { QMenu } from "quasar";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import XMenu from "@/components/XMenu.vue";
import { disabled } from "@/components/XTooltip.extras";
import * as testUtils from "@/testUtils";

it("XMenu", async () => {
  const wrapper = vueTestUtils.mount(XMenu, {
    global: testUtils.globalMountOptions()
  });

  const menu = wrapper.findComponent(QMenu);

  for (const show of [true, false, true]) {
    menu.vm.$emit("update:model-value", show);
    await nextTick();
    expect(disabled.value).toStrictEqual(show);
  }

  wrapper.unmount();
  expect(disabled.value).toBeFalse();
});
