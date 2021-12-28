import { QMenu } from "quasar";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import Menu from "@/components/Menu.vue";
import { disabled } from "@/components/Tooltip.extras";
import * as testUtils from "@/testUtils";

it("Menu", async () => {
  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  const wrapper = vueTestUtils.mount(Menu, {
    global: testUtils.globalMountOptions()
  });

  const menu = wrapper.findComponent(QMenu);

  for (const show of [true, false, true]) {
    warnSpy.mockImplementation(warnMock);
    menu.vm.$emit("update:model-value", show);
    await nextTick();
    expect(disabled.value).toStrictEqual(show);
    expect(warnMock).toBeCalledTimes(1);
    expect(warnMock).toBeCalledWith(
      '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
    );
    warnMock.mockClear();
  }

  wrapper.unmount();
  expect(disabled.value).toBeFalse();
});
