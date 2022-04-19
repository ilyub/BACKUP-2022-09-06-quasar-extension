import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

test("prop: caption", () => {
  const wrapper = vueTestUtils.mount(components.ListItem, {
    global: testUtils.globalMountOptions(),
    props: { caption: "sample-caption" }
  });

  expect(wrapper.find(".q-item__section--nowrap")).textToEqual(
    "sample-caption"
  );
});

test("prop: icon", async () => {
  const wrapper = vueTestUtils.mount(components.ListItem, {
    global: testUtils.globalMountOptions(),
    props: { caption: "sample-caption" }
  });

  expect(wrapper.find(".q-icon")).not.toExist();
  await wrapper.setProps({ icon: "sample-icon" });
  expect(wrapper.find(".q-icon")).textToEqual("sample-icon");
});
