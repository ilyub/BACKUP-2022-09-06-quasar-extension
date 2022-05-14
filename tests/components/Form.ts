import { components, injections } from "@";
import * as testUtils from "@/test-utils";
import { wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QForm } from "quasar";
import { nextTick, watch } from "vue";
import type { handlePromise } from "@skylib/facades";
import type { unknowns } from "@skylib/functions";

functionsTestUtils.installFakeTimer();

test("prop: onSubmit", () => {
  const onSubmit = jest.fn();

  const wrapper = vueTestUtils.mount(components.Form, {
    global: testUtils.globalMountOptions(),
    props: { onSubmit }
  });

  const main = wrapper.findComponent(QForm);

  main.vm.$emit("submit", { value: 1 });
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({ value: 1 });
});

test.each<handlePromise.Type | undefined>([undefined, "httpRequest"])(
  "prop: onSubmitAsync",
  async asyncTaskType => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const callback = jest.fn();

      const wrapper = vueTestUtils.mount(components.Form, {
        global: testUtils.globalMountOptions(),
        props: {
          asyncTaskType,
          onSubmitAsync: async (...args: unknowns): Promise<void> => {
            await wait(1000);
            callback(...args);
          }
        }
      });

      const main = wrapper.findComponent(QForm);

      main.vm.$emit("submit", { value: 1 });
      expect(callback).not.toHaveBeenCalled();
      await wait(1000);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({ value: 1 });
    });
  }
);

test("provideDisable", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(components.Form, {
      global: testUtils.globalMountOptions(),
      props: {
        onSubmitAsync: async (): Promise<void> => {
          await wait(1000);
        }
      },
      slots: {
        default: {
          setup: () => {
            watch(injections.globalDisable.inject(), value => {
              callback(value);
            });
          },
          template: "<div></div>"
        }
      }
    });

    const main = wrapper.findComponent(QForm);

    {
      main.vm.$emit("submit", { value: 1 });
      await nextTick();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(true);
      callback.mockClear();
    }

    {
      await wait(1000);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(false);
      callback.mockClear();
    }
  });
});
