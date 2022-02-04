import type { ComponentConstructor } from "quasar";
import { QInput } from "quasar";
import type { ComponentPublicInstance } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";

import NumericInput from "@/components/NumericInput.vue";
import * as testUtils from "@/testUtils";

it("NumericInput", async () => {
  const wrapper = vueTestUtils.mount(NumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      max: 2,
      modelValue: undefined
    }
  });

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

  function comp(ref: string | ComponentConstructor): vueTestUtils.VueWrapper {
    return wrapper.findComponent<ComponentPublicInstance>(
      is.string(ref) ? `.ref-numeric-input-${ref}` : ref
    );
  }
});
