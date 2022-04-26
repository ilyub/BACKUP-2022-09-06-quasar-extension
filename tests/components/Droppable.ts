import { components } from "@";
import * as testUtils from "@/testUtils";
import * as vueTestUtils from "@vue/test-utils";

test("droppable", () => {
  const wrapper = vueTestUtils.mount(components.Droppable, {
    global: testUtils.globalMountOptions(),
    props: { group: "sample-group" }
  });

  const sortable = wrapper.findComponent(components.Sortable);

  expect(sortable).toExist();
});
