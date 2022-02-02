import { QInput } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import XInput from "@/components/XInput.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    expectedValue: undefined,
    value: ""
  },
  {
    expectedValue: "sample-value",
    value: "sample-value"
  }
])("XInput", ({ expectedValue, value }) => {
  const wrapper = vueTestUtils.mount(XInput, {
    global: testUtils.globalMountOptions()
  });

  const input = wrapper.findComponent(QInput);

  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  {
    const expected = [[expectedValue]];

    warnSpy.mockImplementationOnce(warnMock);
    expect(wrapper.emitted("update:model-value")).toBeUndefined();
    input.vm.$emit("update:model-value", value);
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(warnMock).toBeCalledTimes(1);
    expect(warnMock).toBeCalledWith(
      '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
    );
    warnMock.mockClear();
  }
});
