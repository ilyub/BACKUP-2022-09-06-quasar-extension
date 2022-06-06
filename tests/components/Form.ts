import { components, injections } from "@";
import * as testUtils from "@/test-utils";
import { wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QForm } from "quasar";
import { watch } from "vue";
import type { handlePromise } from "@skylib/facades";
import type { unknowns } from "@skylib/functions";

functionsTestUtils.installFakeTimer();

test.each<handlePromise.Type | undefined>([undefined, "httpRequest"])(
  "prop: onAsyncSubmit",
  async asyncTaskType => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const callback = jest.fn();

      const wrapper = vueTestUtils.mount(components.Form, {
        global: testUtils.globalMountOptions(),
        props: {
          asyncTaskType,
          onAsyncSubmit: async (...args: unknowns): Promise<void> => {
            await wait(1000);
            callback(...args);
          }
        }
      });

      const main = wrapper.findComponent(QForm);

      main.vm.$emit("submit", { value: 1 });
      expect(callback).not.toHaveBeenCalled();
      await wait(1500);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({ value: 1 });
    });
  }
);

test("prop: onSubmit", () => {
  const onSubmit = jest.fn();

  const wrapper = vueTestUtils.mount(components.Form, {
    global: testUtils.globalMountOptions(),
    props: { onSubmit }
  });

  const main = wrapper.findComponent(QForm);

  main.vm.$emit("submit", { value: 1 });
  expect(main.emitted("submit")).toStrictEqual([[{ value: 1 }]]);
});

test("provideDisable", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(components.Form, {
      global: testUtils.globalMountOptions(),
      props: {
        onAsyncSubmit: async (): Promise<void> => {
          await wait(2000);
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
      await wait(1000);
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
