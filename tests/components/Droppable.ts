import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("droppable", () => {
  const wrapper = vueTestUtils.mount(components.Droppable, {
    global: testUtils.globalMountOptions(),
    props: { group: "sample-group" }
  });

  const sortable = wrapper.findComponent(components.Sortable);

  expect(sortable).toExist();
});
