import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { extras } from "@";

test("injectSettings", () => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    setup: (): void => {
      callback(extras.Form.injectForm().submitting.value);
    },
    template: "<div></div>"
  });

  expect(wrapper).toBeDefined();
  expect(callback).mockCallsToBe([false]);
});
