import * as testUtils from "@vue/test-utils";

import IconPicker from "@/components/IconPicker.vue";
import Input from "@/components/Input.vue";
import NavButton from "@/components/NavButton.vue";

it("IconPicker", () => {
  const wrapper = testUtils.mount(IconPicker, {
    components: {
      [Input.name]: Input,
      [NavButton.name]: NavButton
    },
    props: {
      placeholder: ""
    }
  });

  expect(wrapper).toBeDefined();
});
