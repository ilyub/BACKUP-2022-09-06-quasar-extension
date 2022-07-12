import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import type { Callable, unknowns } from "@skylib/functions";
import type { DialogChainObject } from "quasar";
import { QBtn } from "quasar";
import { components } from "@";
import { computed } from "vue";
import { lang } from "@skylib/facades";
import { wait } from "@skylib/functions";

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
    expect(callback).mockCallsToBe();
    await wait(1000);
    expect(callback).mockCallsToBe([]);
  });
});

test("prop: confirmation", async () => {
  const confirmedClick = jest.fn();

  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    props: { confirmation: lang.plain("Sample confirmation") }
  });

  wrapper.vm.$q.dialog = () =>
    ({
      onOk: (callback: Callable): void => {
        callback();
      }
    } as DialogChainObject);

  const main = testUtils.findQuasarComponent(wrapper, QBtn);

  main.vm.$emit("click");
  await wrapper.setProps({ confirmedClick });
  main.vm.$emit("click");
  expect(confirmedClick).mockCallsToBe([]);
});

test.each([true, false])("prop: loading", loading => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    props: { loading }
  });

  const main = testUtils.findQuasarComponent(wrapper, QBtn);

  expect(main.props("loading")).toBe(loading);
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

    const main = testUtils.findQuasarComponent(wrapper, QBtn);

    expect(main.props("loading")).toBe(expected);
  }
);

test("slot: default", () => {
  const wrapper = vueTestUtils.mount(components.BaseButton, {
    global: testUtils.globalMountOptions(),
    slots: { default: '<div id="sample-id">sample-text</div>"' }
  });

  expect(wrapper.find("#sample-id")).textToEqual("sample-text");
});
