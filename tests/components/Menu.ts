import { QMenu } from "quasar";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import Menu from "@/components/Menu.vue";
import { disabled } from "@/components/Tooltip.extras";
import * as testUtils from "@/testUtils";

it("Menu", async () => {
  const wrapper = vueTestUtils.mount(Menu, {
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
