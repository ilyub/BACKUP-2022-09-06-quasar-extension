import { components } from "@";
import * as testUtils from "@/test-utils";
import { lang } from "@skylib/facades";
import { wait } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { QSelect } from "quasar";

const props = {
  options: [
    { label: lang.plain("Option 1"), value: 1 },
    { label: lang.plain("Option 2"), value: "a" }
  ]
};

test("emit: update:modelValue", () => {
  const wrapper = vueTestUtils.mount(components.Select, {
    global: testUtils.globalMountOptions(),
    props
  });

  const main = wrapper.findComponent(QSelect);

  main.vm.$emit("update:modelValue", props.options[1]);
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([["a"]]);
});

test("main: blur", async () => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount(components.Select, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      required: true,
      rulesOnChange: [callback]
    }
  });

  const main = wrapper.findComponent(QSelect);

  callback.mockImplementationOnce(() => true);
  main.vm.$emit("blur");
  await wait(1000);
  expect(callback).toHaveBeenCalledTimes(1);
});

test.each([
  { expected: "" },
  { expected: "Select color", initialLabel: lang.keys.SelectColor }
])("prop: initialLabel", ({ expected, initialLabel }) => {
  const wrapper = vueTestUtils.mount(components.Select, {
    global: testUtils.globalMountOptions(),
    props: { ...props, initialLabel }
  });

  expect(wrapper.find(".q-field__native").text()).toStrictEqual(expected);
});

test.each([
  { expected: "Select color" },
  { expected: "Option 1", modelValue: 1 },
  { expected: "Option 2", modelValue: "a" }
])("prop: modelValue", ({ expected, modelValue }) => {
  const wrapper = vueTestUtils.mount(components.Select, {
    global: testUtils.globalMountOptions(),
    props: {
      ...props,
      initialLabel: lang.keys.SelectColor,
      modelValue
    }
  });

  expect(wrapper.find(".q-field__native").text()).toStrictEqual(expected);
});

test.each([true, false])("prop: required", required => {
  const wrapper = vueTestUtils.mount(components.Select, {
    global: testUtils.globalMountOptions(),
    props: { ...props, required }
  });

  const { elem } = testUtils.findFactory("select", wrapper);

  expect(elem("display-value-required").exists()).toStrictEqual(required);
});
