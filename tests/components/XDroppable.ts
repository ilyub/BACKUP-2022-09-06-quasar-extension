import * as vueTestUtils from "@vue/test-utils";

import XDroppable from "@/components/XDroppable.vue";
import XSortable from "@/components/XSortable.vue";
import * as testUtils from "@/testUtils";

it("XDroppable", () => {
  const wrapper = vueTestUtils.mount(XDroppable, {
    global: testUtils.globalMountOptions(),
    props: {
      group: "sample-group"
    }
  });

  const sortable = wrapper.findComponent(XSortable);

  expect(sortable).toExist();
});
