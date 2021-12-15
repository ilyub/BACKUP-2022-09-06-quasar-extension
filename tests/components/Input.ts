import { QInput } from "quasar";
import type { ComponentPublicInstance } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import Input from "@/components/Input.vue";
import * as testUtils from "@/testUtils";

it("Input", async () => {
  const wrapper = vueTestUtils.mount(Input, {
    global: testUtils.globalMountOptions(),
    props: {
      modelValue: ""
    }
  });

  const consoleWarnMock = jest.fn();

  const consoleWarnSpy = jest.spyOn(console, "warn");

  const input = wrapper.findComponent(QInput);

  {
    const expected = [["sample-value"]];

    consoleWarnSpy.mockImplementation(consoleWarnMock);
    input.vm.$emit("update:model-value", "sample-value");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
    expect(consoleWarnMock).toBeCalledTimes(1);
    expect(consoleWarnMock).toBeCalledWith(
      '[Vue warn]: Component emitted event "update:model-value" but it is neither declared in the emits option nor as an "onUpdate:model-value" prop.'
    );
    consoleWarnMock.mockClear();
  }

  {
    expect(reset()).not.toExist();
    await wrapper.setProps({ resetButton: true });
    expect(reset()).toExist();
  }

  {
    const expected = [["sample-value"], [""]];

    await reset().trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  function reset(): vueTestUtils.VueWrapper<ComponentPublicInstance> {
    return wrapper.findComponent(".reset");
  }
});
