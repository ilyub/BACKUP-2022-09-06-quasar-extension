import * as vueTestUtils from "@vue/test-utils";

import Resizer from "@/components/Resizer.vue";
import * as testUtils from "@/testUtils";

test.each([
  { cursor: "not-allowed", max: 300, min: 100, offset: -110, value: 100 },
  { cursor: "ew-resize", max: 300, min: 100, offset: -10, value: 190 },
  { cursor: "ew-resize", max: 300, min: 100, offset: 10, value: 210 },
  { cursor: "not-allowed", max: 300, min: 100, offset: 110, value: 300 },
  { cursor: "not-allowed", min: 100, offset: -110, value: 100 },
  { cursor: "ew-resize", min: 100, offset: -10, value: 190 },
  { cursor: "ew-resize", min: 100, offset: 10, value: 210 },
  { cursor: "ew-resize", min: 100, offset: 110, value: 310 }
])("resizer", ({ cursor, max, min, offset, value }) => {
  const { touchPan, triggerTouchPan } = testUtils.touchPanMock();

  const wrapper = vueTestUtils.mount(Resizer, {
    directives: {
      touchPan
    },
    props: {
      max,
      min,
      modelValue: 200
    }
  });

  {
    const event = {
      isFinal: false,
      isFirst: true,
      offset: { x: offset, y: 0 }
    };

    const emitted = [[value]];

    document.documentElement.style.cursor = "";
    triggerTouchPan(event);
    expect(document.documentElement.style.cursor).toStrictEqual(cursor);
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(emitted);
  }

  {
    const event = {
      isFinal: true,
      isFirst: false,
      offset: { x: offset, y: 0 }
    };

    const emitted = [[value], [value]];

    document.documentElement.style.cursor = "";
    triggerTouchPan(event);
    expect(document.documentElement.style.cursor).toBe("");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(emitted);
  }
});
