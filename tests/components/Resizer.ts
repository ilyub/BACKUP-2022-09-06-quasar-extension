import { components } from "@";
import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";

test.each([
  {
    expectedCursor: "not-allowed",
    expectedEmitted: [100],
    max: 300,
    min: 100,
    x: -110
  },
  {
    expectedCursor: "ew-resize",
    expectedEmitted: [190],
    max: 300,
    min: 100,
    x: -10
  },
  {
    expectedCursor: "ew-resize",
    expectedEmitted: [210],
    max: 300,
    min: 100,
    x: 10
  },
  {
    expectedCursor: "not-allowed",
    expectedEmitted: [300],
    max: 300,
    min: 100,
    x: 110
  },
  {
    expectedCursor: "not-allowed",
    expectedEmitted: [100],
    min: 100,
    x: -110
  },
  {
    expectedCursor: "ew-resize",
    expectedEmitted: [190],
    min: 100,
    x: -10
  },
  {
    expectedCursor: "ew-resize",
    expectedEmitted: [210],
    min: 100,
    x: 10
  },
  {
    expectedCursor: "ew-resize",
    expectedEmitted: [310],
    min: 100,
    x: 110
  }
])("resizer", ({ expectedCursor, expectedEmitted, max, min, x }) => {
  const touchPan = testUtils.mocks.touchPan();

  const wrapper = vueTestUtils.mount(components.Resizer, {
    directives: { touchPan: touchPan.directive },
    global: testUtils.globalMountOptions(),
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
      offset: { x, y: 0 }
    };

    document.documentElement.style.cursor = "";
    touchPan.trigger(event);
    expect(document.documentElement.style.cursor).toStrictEqual(expectedCursor);
    expect(wrapper).toHaveEmitted("update:modelValue", expectedEmitted);
  }

  {
    const event = {
      isFinal: true,
      isFirst: false,
      offset: { x, y: 0 }
    };

    document.documentElement.style.cursor = "";
    touchPan.trigger(event);
    expect(document.documentElement.style.cursor).toBe("");
    expect(wrapper).toHaveEmitted("update:modelValue", expectedEmitted);

  }
});
