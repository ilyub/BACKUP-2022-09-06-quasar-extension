import { components } from "@";
import * as testUtils from "@/test-utils";
import { lang } from "@skylib/facades";
import { wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QBtn } from "quasar";
import { computed } from "vue";
import type { Callable, unknowns } from "@skylib/functions";
import type { DialogChainObject } from "quasar";

functionsTestUtils.installFakeTimer();

test("prop: confirmation", async () => {
  const confirmedClick = jest.fn();

  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    props: { confirmation: lang.plain("Sample confirmation") }
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

  main.vm.$emit("click");
  await wrapper.setProps({ confirmedClick });
  main.vm.$emit("click");
  expect(confirmedClick).toHaveBeenCalledTimes(1);
  expect(confirmedClick).toHaveBeenCalledWith();
  confirmedClick.mockClear();
});

test.each([true, false])("prop: loading", loading => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    props: { loading }
  });

  const main = wrapper.findComponent(QBtn);

  expect(main.props("loading")).toStrictEqual(loading);
});

test("prop: onAsyncClick", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(components.BaseButton, {
      global: testUtils.globalMountOptions(),
      props: {
        onAsyncClick: async (...args: unknowns) => {
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

test.each([
  {
    animateSubmitting: true,
    expected: true,
    submitting: true,
    type: "submit"
  },
  {
    animateSubmitting: false,
    expected: false,
    submitting: false
  }
])(
  "setting: animateSubmitting",
  ({ animateSubmitting, expected, submitting, type }) => {
    const wrapper = vueTestUtils.mount(components.BaseButton, {
      global: testUtils.globalMountOptions({
        baseButtonSettings: { animateAsyncClick: false, animateSubmitting },
        formExposeDown: { submitting: computed(() => submitting) }
      }),
      props: { type }
    });

    const main = wrapper.findComponent(QBtn);

    expect(main.props("loading")).toStrictEqual(expected);
  }
);

test("slot: default", () => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    slots: { default: '<div id="sample-id">sample-text</div>"' }
  });

  expect(wrapper.find("#sample-id")).textToEqual("sample-text");
});
