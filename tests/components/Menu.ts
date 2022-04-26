import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";
import { QMenu } from "quasar";
import { nextTick } from "vue";

test("menu", async () => {
  const wrapper = vueTestUtils.mount(components.Menu, {
    global: testUtils.globalMountOptions()
  });

  const menu = wrapper.findComponent(QMenu);

  {
    menu.vm.$emit("update:modelValue", true);
    await nextTick();
    expect(components.disabled.value).toBeTrue();
  }

  {
    menu.vm.$emit("update:modelValue", false);
    await nextTick();
    expect(components.disabled.value).toBeFalse();
  }

  {
    menu.vm.$emit("update:modelValue", true);
    await nextTick();
    expect(components.disabled.value).toBeTrue();
  }

  wrapper.unmount();
  expect(components.disabled.value).toBeFalse();
});
