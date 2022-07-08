import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QPopupProxy } from "quasar";
import { components } from "@";

test("PopupProxy", () => {
  const wrapper = vueTestUtils.mount(components.PopupProxy, {
    global: testUtils.globalMountOptions()
  });

  const main = testUtils.findQuasarComponent(wrapper, QPopupProxy);

  expect(main).toExist();
});
