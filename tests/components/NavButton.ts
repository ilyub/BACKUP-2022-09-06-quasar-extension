import { QTooltip } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import NavButton from "@/components/NavButton.vue";
import * as testUtils from "@/testUtils";

it.each([true, false])("prop: modelValue", async modelValue => {
  const wrapper = vueTestUtils.mount(NavButton, {
    global: testUtils.globalMountOptions(),
    props: {
      modelValue
    }
  });

  expect(wrapper.emitted("update:model-value")).toBeUndefined();
  await wrapper.trigger("click");
  expect(wrapper.emitted("update:model-value")).toStrictEqual([[!modelValue]]);
});

it("prop: tooltip", async () => {
  const wrapper = vueTestUtils.mount(NavButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper.findComponent(QTooltip)).not.toExist();
  await wrapper.setProps({ tooltip: "sample-tooltip" });
  expect(wrapper.findComponent(QTooltip)).toExist();
});

it("slot: default", () => {
  const wrapper = vueTestUtils.mount(NavButton, {
    global: testUtils.globalMountOptions(),
    slots: {
      default: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
