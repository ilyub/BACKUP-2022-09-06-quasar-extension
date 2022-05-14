import { components } from "@";
import * as testUtils from "@/test-utils";
import { wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QBtn } from "quasar";
import type { Callable, unknowns } from "@skylib/functions";
import type { DialogChainObject } from "quasar";

functionsTestUtils.installFakeTimer();

test("prop: asyncClick", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(components.BaseButton, {
      global: testUtils.globalMountOptions(),
      props: {
        asyncClick: async (...args: unknowns) => {
          await wait(1000);
          callback(...args);
        }
      }
    });

    await wrapper.trigger("click");
    expect(callback).not.toHaveBeenCalled();
    await wait(1000);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith();
  });
});

test("prop: confirmation, confirmedClick", async () => {
  const confirmedClick = jest.fn();

  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    props: { confirmation: "Sample confirmation" }
  });

  wrapper.vm.$q.dialog = (): DialogChainObject => {
    const result = {
      onOk: (callback: Callable): void => {
        callback();
      }
    };

    return result as DialogChainObject;
  };

  const main = wrapper.findComponent(QBtn);

  {
    main.vm.$emit("click");
    expect(confirmedClick).not.toHaveBeenCalled();
  }

  {
    await wrapper.setProps({ confirmedClick });
    main.vm.$emit("click");
    expect(confirmedClick).toHaveBeenCalledTimes(1);
    expect(confirmedClick).toHaveBeenCalledWith();
    confirmedClick.mockClear();
  }
});

test("slot: default", () => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    slots: { default: '<div id="sample-id">sample-text</div>"' }
  });

  expect(wrapper.find("#sample-id")).textToEqual("sample-text");
});
