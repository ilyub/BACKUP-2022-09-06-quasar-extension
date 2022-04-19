import { wait } from "@skylib/functions";
import type { Callable } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/testUtils";
import * as vueTestUtils from "@vue/test-utils";
import { QBtn, QTooltip } from "quasar";
import type { DialogChainObject } from "quasar";
import { components } from "@";
import * as testUtils from "@/testUtils";

functionsTestUtils.installFakeTimer();

test("async сlick", async () => {
  expect.assertions(2);

  await functionsTestUtils.run(async () => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(components.BaseButton, {
      global: testUtils.globalMountOptions(),
      props: {
        async asyncClick() {
          await wait(500);
          callback();
        }
      }
    });

    await wrapper.trigger("click");
    expect(callback).not.toHaveBeenCalled();
    await wait(1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });
});

test("prop: confirmation", () => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    props: { confirmation: "Sample confirmation" }
  });

  wrapper.vm.$q.dialog = (): DialogChainObject => {
    const result = {
      onOk(callback: Callable): void {
        callback();
      }
    };

    // eslint-disable-next-line no-type-assertion/no-type-assertion
    return result as DialogChainObject;
  };

  const btn = wrapper.findComponent(QBtn);

  btn.vm.$emit("click");
  expect(wrapper.emitted("confirmedClick")).toStrictEqual([[]]);
});

test("prop: tooltip", async () => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions()
  });

  expect(wrapper.findComponent(QTooltip)).not.toExist();
  await wrapper.setProps({ tooltip: "sample-tooltip" });
  expect(wrapper.findComponent(QTooltip)).toExist();
});

test("slot: default", () => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    slots: { default: '<div class="sample-class">sample-contents</div>"' }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
