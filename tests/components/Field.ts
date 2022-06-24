import { components } from "@";
import * as testUtils from "@/test-utils";
import { cast } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";

test.each([
  { expected: [undefined], value: "" },
  { expected: ["sample-value"], value: "sample-value" }
])("emit: update:modelValue", ({ expected, value }) => {
  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions(),
    props: { format: cast.stringU, modelValue: undefined }
  });

  const main = testUtils.findQuasarComponent(wrapper, QField);

  expect(wrapper).toHaveEmitted("update:modelValue");
  main.vm.$emit("update:modelValue", value);
  expect(wrapper).toHaveEmitted("update:modelValue", expected);
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

  const main = testUtils.findQuasarComponent(wrapper, QField);

  callback.mockImplementationOnce(() => true);
  main.vm.$emit("blur");
  expect(callback).mockCallsToBe([modelValue]);
});

test("main: focus", async () => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount(components.Field, {
    global: testUtils.globalMountOptions(),
    props: { format: cast.stringU, modelValue: undefined }
  });

  const main = testUtils.findQuasarComponent(wrapper, QField);

  {
    main.vm.$emit("focus");
    expect(callback).mockCallsToBe();
  }

  {
    await wrapper.setProps({ focusableElement: { focus: callback } });
    main.vm.$emit("focus");
    expect(callback).mockCallsToBe([]);
  }
});
