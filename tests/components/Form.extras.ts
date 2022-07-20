import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { extras } from "@";

test("injectSettings", () => {
  const callback = jest.fn();

  vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    setup: (): void => {
      callback(extras.Form.injectForm().submitting.value);
    },
    template: "<div></div>"
  });

  expect(callback).mockCallsToBe([false]);
});
