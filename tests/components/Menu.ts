import { components } from "@";
// eslint-disable-next-line import/no-internal-modules -- Ok
import { disableCounter } from "@/components/Tooltip.core";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QMenu } from "quasar";
import { nextTick } from "vue";

test("menu", async () => {
  const wrapper = vueTestUtils.mount(components.Menu, {
    global: testUtils.globalMountOptions()
  });

  const main = wrapper.findComponent(QMenu);

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
