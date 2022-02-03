import type { ComponentConstructor } from "quasar";
import { QInput } from "quasar";
import type { ComponentPublicInstance } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";

import XNumericInput from "@/components/XNumericInput.vue";
import * as testUtils from "@/testUtils";

it("XNumericInput", async () => {
  const wrapper = vueTestUtils.mount(XNumericInput, {
    global: testUtils.globalMountOptions(),
    props: {
      max: 100,
      modelValue: 0
    }
  });

  const main = comp(QInput);

  {
    const expected = [[0]];

    main.vm.$emit("update:model-value", "invalid");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[0], [2]];

    main.vm.$emit("update:model-value", "2");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[0], [2], [1]];

    await comp("next").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  {
    const expected = [[0], [2], [1], [-1]];

    await comp("prev").trigger("click");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(expected);
  }

  function comp(ref: string | ComponentConstructor): vueTestUtils.VueWrapper {
    return wrapper.findComponent<ComponentPublicInstance>(
      is.string(ref) ? `.ref-numeric-input-${ref}` : ref
    );
  }
});
