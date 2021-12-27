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

  const warnMock = jest.fn();

  const warnSpy = jest.spyOn(console, "warn");

  const input = wrapper.findComponent(QInput);

  {
    const expected = [["sample-value"]];

    warnSpy.mockImplementation(warnMock);
    input.vm.$emit("update:model-value", "sample-value");
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
    const expected = [["sample-value"], [""]];

    await reset().trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  function reset(): vueTestUtils.VueWrapper {
    return wrapper.findComponent<ComponentPublicInstance>(".reset");
  }
});
