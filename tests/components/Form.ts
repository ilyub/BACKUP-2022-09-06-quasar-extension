import { components, extras, injections } from "@";
import * as testUtils from "@/test-utils";
import { as, wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QForm } from "quasar";
import { onMounted, ref, watch } from "vue";
import type { handlePromise } from "@skylib/facades";
import type { unknowns } from "@skylib/functions";

functionsTestUtils.installFakeTimer();

test("emit: submit", () => {
  const onSubmit = jest.fn();

  const wrapper = vueTestUtils.mount(components.Form, {
    global: testUtils.globalMountOptions(),
    props: { onSubmit }
  });

  const main = testUtils.findQuasarComponent(wrapper, QForm);

  main.vm.$emit("submit", { value: 1 });
  expect(main).toHaveEmitted("submit", [{ value: 1 }]);
});

test("expose: resetValidation", () => {
  const callback = jest.fn();

  const wrapper = vueTestUtils.mount(
    {
      setup: () => {
        const main = ref<extras.Form.Global>();

        onMounted(() => {
          as.not.empty(main.value).resetValidation();
          callback();
        });

        return { main, rules: [() => true] };
      },
      template: `
        <m-form ref="main">
          <m-field :rules-on-change="[rules]" model-value="" />
        </m-form>
      `
    },
    { global: testUtils.globalMountOptions() }
  );

  expect(wrapper).toBeDefined();
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith();
});

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

      const main = testUtils.findQuasarComponent(wrapper, QForm);

      main.vm.$emit("submit", { value: 1 });
      expect(callback).not.toHaveBeenCalled();
      await wait(1500);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith({ value: 1 });
    });
  }
);

test("prop: onAsyncSubmit", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const disable = jest.fn();

    const submitting = jest.fn();

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
            watch(injections.disable.inject(), value => {
              disable(value);
            });

            watch(extras.Form.injectForm().submitting, value => {
              submitting(value);
            });
          },
          template: "<div></div>"
        }
      }
    });

    const main = testUtils.findQuasarComponent(wrapper, QForm);

    {
      main.vm.$emit("submit", { value: 1 });
      await wait(1000);
      expect(disable).toHaveBeenCalledTimes(1);
      expect(disable).toHaveBeenCalledWith(true);
      expect(submitting).toHaveBeenCalledTimes(1);
      expect(submitting).toHaveBeenCalledWith(true);
      disable.mockClear();
      submitting.mockClear();
    }

    {
      await wait(1000);
      expect(disable).toHaveBeenCalledTimes(1);
      expect(disable).toHaveBeenCalledWith(false);
      expect(submitting).toHaveBeenCalledTimes(1);
      expect(submitting).toHaveBeenCalledWith(false);
      disable.mockClear();
      submitting.mockClear();
    }
  });
});
