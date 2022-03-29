import * as vueTestUtils from "@vue/test-utils";

import Droppable from "@/components/Droppable.vue";
import Sortable from "@/components/Sortable.vue";
import * as testUtils from "@/testUtils";

test("droppable", () => {
  const wrapper = vueTestUtils.mount(Droppable, {
    global: testUtils.globalMountOptions(),
    props: { group: "sample-group" }
  });

  const sortable = wrapper.findComponent(Sortable);

  expect(sortable).toExist();
});
