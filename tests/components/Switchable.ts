import { components, injections } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { watch } from "vue";
import type { extras } from "@";

test.each<extras.Switchable.Transition>(["none", "slide"])(
  "switchable",
  async transition => {
    const callback = jest.fn();

    const wrapper = vueTestUtils.mount(components.Switchable, {
      global: testUtils.globalMountOptions({
        switchableSettings: { transition, transitionDuration: 500 }
      }),
      slots: {
        default: {
          setup: () => {
            watch(
              injections.globalDisable.inject(),
              value => {
                callback(value);
              },
              { immediate: true }
            );
          },
          template: "<div></div>"
        }
      }
    });

    {
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(false);
      callback.mockClear();
    }

    {
      await wrapper.setProps({ disable: true });
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(true);
      callback.mockClear();
    }
  }
);
