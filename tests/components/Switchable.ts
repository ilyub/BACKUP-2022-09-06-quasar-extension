import { watch } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import type {
  SwitchableSettings,
  Transition
} from "@/components/Switchable.extras";
import { injectDisable } from "@/components/Switchable.extras";
import Switchable from "@/components/Switchable.vue";
import * as testUtils from "@/testUtils";

test.each<Transition>(["none", "slide"])("switchable", async transition => {
  const callback = jest.fn();

  // eslint-disable-next-line no-warning-comments
  // fixme: Use typedef()
  const switchableSettings: SwitchableSettings = {
    transition,
    transitionDuration: 400
  };

  const wrapper = vueTestUtils.mount(Switchable, {
    global: testUtils.globalMountOptions({ switchableSettings }),
    slots: {
      default: {
        setup() {
          watch(
            injectDisable(),
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
});
