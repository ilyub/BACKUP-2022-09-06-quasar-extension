import { components } from "@";
import * as testUtils from "@/test-utils";
import { cast } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";

test.each([
  { expected: [[undefined]], value: "" },
  { expected: [["sample-value"]], value: "sample-value" }
])("emit: update:modelValue", ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions(),
    props: { format: cast.stringU, modelValue: undefined }
  });

  const main = wrapper.findComponent(QField);

  expect(wrapper.emitted("update:modelValue")).toBeUndefined();
  main.vm.$emit("update:modelValue", value);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
});

test.each([undefined, "a"])("main: blur", modelValue => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions(),
    props: {
      format: cast.stringU,
      modelValue,
      rulesOnChange: [callback]
    }
  });

  const main = wrapper.findComponent(QField);

  callback.mockImplementationOnce(() => true);
  main.vm.$emit("blur");
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith(modelValue);
});

test("main: focus", async () => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions(),
    props: { format: cast.stringU, modelValue: undefined }
  });

  const main = wrapper.findComponent(QField);

  {
    main.vm.$emit("focus");
    expect(callback).not.toHaveBeenCalled();
  }

  {
    await wrapper.setProps({ focusableElement: { focus: callback } });
    main.vm.$emit("focus");
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith();
  }
});
