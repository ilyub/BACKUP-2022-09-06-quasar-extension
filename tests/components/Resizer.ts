import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";

import Resizer from "@/components/Resizer.vue";
import * as testUtils from "@/testUtils";

it.each([
  { max: 300, min: 100, value: -110 },
  { max: 300, min: 100, value: -10 },
  { max: 300, min: 100, value: 10 },
  { max: 300, min: 100, value: 110 },
  { min: 100, value: -110 },
  { min: 100, value: -10 },
  { min: 100, value: 10 },
  { min: 100, value: 110 }
])("Resizer", options => {
  const { touchPan, triggerTouchPan } = testUtils.touchPanMock();

  const wrapper = vueTestUtils.mount(Resizer, {
    directives: {
      touchPan
    },
    props: {
      max: options.max,
      min: options.min,
      modelValue: 200
    }
  });

  const value = 200 + options.value;

  const limitedValue = Math.max(
    is.not.empty(options.max) ? Math.min(value, options.max) : value,
    options.min
  );

  {
    const event = {
      isFinal: false,
      isFirst: true,
      offset: { x: options.value, y: 0 }
    };

    const cursor = limitedValue === value ? "ew-resize" : "not-allowed";

    const emitted = [[limitedValue]];

    document.documentElement.style.cursor = "";
    triggerTouchPan(event);
    expect(document.documentElement.style.cursor).toStrictEqual(cursor);
    expect(wrapper.emitted("update:model-value")).toStrictEqual(emitted);
  }

  {
    const event = {
      isFinal: true,
      isFirst: false,
      offset: { x: options.value, y: 0 }
    };

    const emitted = [[limitedValue], [limitedValue]];

    document.documentElement.style.cursor = "";
    triggerTouchPan(event);
    expect(document.documentElement.style.cursor).toStrictEqual("");
    expect(wrapper.emitted("update:model-value")).toStrictEqual(emitted);
  }
});
