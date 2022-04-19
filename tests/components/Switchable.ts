import * as vueTestUtils from "@vue/test-utils";
import { watch } from "vue";
import { components } from "@";
import * as testUtils from "@/testUtils";

test.each<components.Transition>(["none", "slide"])(
  "switchable",
  async transition => {
    const callback = jest.fn();

    // eslint-disable-next-line no-warning-comments
    // fixme: Use typedef()
    const switchableSettings: components.SwitchableSettings = {
      transition,
      transitionDuration: 400
    };

    const wrapper = vueTestUtils.mount(components.Switchable, {
      global: testUtils.globalMountOptions({ switchableSettings }),
      slots: {
        default: {
          setup() {
            watch(
              components.injectDisable(),
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
