import { QInput } from "quasar";
import type { ComponentPublicInstance } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import Input from "@/components/Input.vue";
import * as testUtils from "@/testUtils";

it.each([
  {
    emittedValue: "",
    expectedValue: undefined
  },
  {
    emittedValue: "sample-value",
    expectedValue: "sample-value"
  }
])("Input", async ({ emittedValue, expectedValue }) => {
  const wrapper = vueTestUtils.mount(Input, {
    global: testUtils.globalMountOptions()
  });

  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  const input = wrapper.findComponent(QInput);

  {
    const expected = [[expectedValue]];

    warnSpy.mockImplementation(warnMock);
    input.vm.$emit("update:model-value", emittedValue);
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(warnMock).toBeCalledTimes(1);
    expect(warnMock).toBeCalledWith(
      '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
    );
    warnMock.mockClear();
  }

  {
    expect(reset()).not.toExist();
    await wrapper.setProps({ resetButton: true });
    expect(reset()).toExist();
  }

  {
    const expected = [[expectedValue], [undefined]];

    await reset().trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  function reset(): vueTestUtils.VueWrapper {
    return wrapper.findComponent<ComponentPublicInstance>(".reset");
  }
});
