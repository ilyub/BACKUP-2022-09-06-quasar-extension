/* eslint jest/max-expects: [warn, { max: 2 }] -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { components, extras, injections } from "@";
import { watch } from "vue";

const Transition = extras.Switchable.Transition;

test.each([Transition.none, Transition.slide])(
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
              injections.disable.inject(),
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

    expect(callback).mockCallsToBe([false]);
    await wrapper.setProps({ disable: true });
    expect(callback).mockCallsToBe([true]);
  }
);
