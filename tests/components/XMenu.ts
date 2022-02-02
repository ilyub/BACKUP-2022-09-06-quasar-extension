import { QMenu } from "quasar";
import { nextTick } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import XMenu from "@/components/XMenu.vue";
import { disabled } from "@/components/XTooltip.extras";
import * as testUtils from "@/testUtils";

it("XMenu", async () => {
  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  const wrapper = vueTestUtils.mount(XMenu, {
    global: testUtils.globalMountOptions()
  });

  const menu = wrapper.findComponent(QMenu);

  for (const show of [true, false, true]) {
    warnSpy.mockImplementationOnce(warnMock);
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
