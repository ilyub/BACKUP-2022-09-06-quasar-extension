import * as vueTestUtils from "@vue/test-utils";
import NumericInput from "@/components/NumericInput.vue";
import * as testUtils from "@/testUtils";

test("numericInput", async () => {
  const wrapper = vueTestUtils.mount(NumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      max: 2,
      modelValue: undefined,
      required: true
    }
  });

  const comp = testUtils.findComponentFactory(".ref-numeric-input-", wrapper);

  const elem = testUtils.findElementFactory(".ref-numeric-input-", wrapper);

  {
    const expected = [[undefined]];

    elem("input").element.setAttribute("value", "invalid");
    await elem("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1]];

    elem("input").element.setAttribute("value", "1");
    await elem("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0]];

    await comp("up").trigger("click");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0]];

    await comp("down").trigger("click");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  await wrapper.setProps({ modelValue: 0 });

  {
    const expected = [[undefined], [1], [0], [1]];

    await comp("up").trigger("click");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0], [1]];

    await comp("down").trigger("click");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  await wrapper.setProps({ modelValue: 2 });

  {
    const expected = [[undefined], [1], [0], [1]];

    await comp("up").trigger("click");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0], [1], [1]];

    await comp("down").trigger("click");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }
});

test.each(["big-down", "down"])("numericInput: undef", async down => {
  const wrapper = vueTestUtils.mount(NumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      bigStep: 5,
      max: 2,
      modelValue: 0
    }
  });

  const comp = testUtils.findComponentFactory(".ref-numeric-input-", wrapper);

  await comp(down).trigger("click");
  expect(wrapper.emitted("update:modelValue")).toStrictEqual([[undefined]]);
});
