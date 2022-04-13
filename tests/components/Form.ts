import type { Type } from "@skylib/facades/es/handlePromise";
import { wait } from "@skylib/functions/es/helpers";
import * as functionsTestUtils from "@skylib/functions/es/testUtils";
import type { unknowns } from "@skylib/functions/es/types/core";
import * as vueTestUtils from "@vue/test-utils";
import { QForm } from "quasar";
import { nextTick, watch } from "vue";
import Form from "@/components/Form.vue";
import { injectDisable } from "@/components/Switchable.extras";
import * as testUtils from "@/testUtils";

beforeAll(functionsTestUtils.installFakeTimer);

test("form, onSubmit", () => {
  const onSubmit = jest.fn();

  const wrapper = vueTestUtils.mount(Form, {
    global: testUtils.globalMountOptions(),
    props: { onSubmit }
  });

  const form = wrapper.findComponent(QForm);

  {
    form.vm.$emit("submit", { value: 1 });
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ value: 1 });
    onSubmit.mockClear();
  }
});

test.each<Type | undefined>([undefined, "httpRequest"])(
  "form: onSubmitAsync",
  async asyncTaskType => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const callback = jest.fn();

      const wrapper = vueTestUtils.mount(Form, {
        global: testUtils.globalMountOptions(),
        props: { asyncTaskType, onSubmitAsync }
      });

      const form = wrapper.findComponent(QForm);

      {
        form.vm.$emit("submit", { value: 1 });
        expect(callback).not.toHaveBeenCalled();
      }

      {
        await wait(1500);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith({ value: 1 });
        callback.mockClear();
      }

      async function onSubmitAsync(...args: unknowns): Promise<void> {
        await wait(1000);
        callback(...args);
      }
    });
  }
);

test("form: provideDisable", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(Form, {
      global: testUtils.globalMountOptions(),
      props: { onSubmitAsync },
      slots: {
        default: {
          setup() {
            watch(injectDisable(), value => {
              callback(value);
            });
          },
          template: "<div></div>"
        }
      }
    });

    const form = wrapper.findComponent(QForm);

    {
      form.vm.$emit("submit", { value: 1 });
      await nextTick();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(true);
      callback.mockClear();
    }

    {
      await wait(1500);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(false);
      callback.mockClear();
    }

    async function onSubmitAsync(): Promise<void> {
      await wait(1000);
    }
  });
});
