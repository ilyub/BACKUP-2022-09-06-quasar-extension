import { QInput } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import NumericInput from "@/components/NumericInput.vue";
import * as testUtils from "@/testUtils";

test("numericInput", async () => {
  const wrapper = vueTestUtils.mount(NumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      max: 2,
      modelValue: undefined
    }
  });

  const comp = testUtils.findComponentFactory(".ref-numeric-input-", wrapper);

  const main = comp(QInput);

  {
    const expected = [[undefined]];

    main.vm.$emit("update:model-value", "invalid");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1]];

    main.vm.$emit("update:model-value", "1");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0]];

    await comp("next").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0], [2]];

    await comp("prev").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  await wrapper.setProps({ modelValue: 0 });

  {
    const expected = [[undefined], [1], [0], [2], [1]];

    await comp("next").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0], [2], [1]];

    await comp("prev").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  await wrapper.setProps({ modelValue: 2 });

  {
    const expected = [[undefined], [1], [0], [2], [1]];

    await comp("next").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [1], [0], [2], [1], [1]];

    await comp("prev").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }
});
