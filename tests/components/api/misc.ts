import { classRef, injectableTrigger } from "@";
import * as testUtils from "@/test-utils";
import { wait } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { onMounted } from "vue";

test("classRef", () => {
  expect(classRef(1).value).toBe(1);
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
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith();
});
