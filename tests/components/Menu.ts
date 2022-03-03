import { QMenu } from "quasar";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import Menu from "@/components/Menu.vue";
import { disabled } from "@/components/Tooltip.extras";
import * as testUtils from "@/testUtils";

test("menu", async () => {
  const wrapper = vueTestUtils.mount(Menu, {
    global: testUtils.globalMountOptions()
  });

  const menu = wrapper.findComponent(QMenu);

  {
    menu.vm.$emit("update:modelValue", true);
    await nextTick();
    expect(disabled.value).toBeTrue();
  }

  {
    menu.vm.$emit("update:modelValue", false);
    await nextTick();
    expect(disabled.value).toBeFalse();
  }

  {
    menu.vm.$emit("update:modelValue", true);
    await nextTick();
    expect(disabled.value).toBeTrue();
  }

  wrapper.unmount();
  expect(disabled.value).toBeFalse();
});
