import { classRef, injectRequire, injectableTrigger, prop } from "@";
import * as testUtils from "@/test-utils";
import { wait } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { onMounted, provide } from "vue";

test("classRef", () => {
  expect(classRef(1).value).toBe(1);
});

test("injectRequire", async () => {
  expect.hasAssertions();

  const callback = jest.fn();

  const key = Symbol("sample-injection-key");

  const wrapper = vueTestUtils.mount({
    components: {
      subcomponent: {
        setup: () => {
          callback(injectRequire(key));
        },
        template: "<div></div>"
      }
    },
    global: testUtils.globalMountOptions(),
    setup: (): void => {
      provide(key, 1);
    },
    template: "<subcomponent />"
  });

  await wait(1000);
  expect(wrapper).toBeDefined();
  expect(callback).mockCallsToBe([1]);
});

test("prop", () => {
  expect(prop<unknown>()).toStrictEqual({});
  // eslint-disable-next-line @skylib/quasar-extension/no-restricted-syntax -- Ok
  expect(prop.boolean()).toStrictEqual({ default: false, type: Boolean });
  expect(prop.default<unknown>(1)).toStrictEqual({ default: 1 });
  expect(prop.required<unknown>()).toStrictEqual({ required: true });
});

test("trigger", async () => {
  expect.hasAssertions();

  const callback = jest.fn();

  const trigger = injectableTrigger();

  const wrapper = vueTestUtils.mount({
    components: {
      subcomponent: {
        setup: () => {
          trigger.watch(callback);
        },
        template: "<div></div>"
      }
    },
    global: testUtils.globalMountOptions(),
    setup: (): void => {
      onMounted(trigger.provide());
    },
    template: "<subcomponent />"
  });

  await wait(1000);
  expect(wrapper).toBeDefined();
  expect(callback).mockCallsToBe([]);
});
