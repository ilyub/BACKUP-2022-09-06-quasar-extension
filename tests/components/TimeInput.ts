import * as vueTestUtils from "@vue/test-utils";

import TimeInput from "@/components/TimeInput.vue";
import * as testUtils from "@/testUtils";

test("timeInput: change", async () => {
  const wrapper = vueTestUtils.mount(TimeInput, {
    global: testUtils.globalMountOptions()
  });

  const elem = testUtils.findElementFactory(".ref-time-input-", wrapper);

  {
    const expected = [[undefined]];

    elem("input").element.setAttribute("value", "");
    await elem("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [60]];

    elem("input").element.setAttribute("value", "1");
    await elem("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }

  {
    const expected = [[undefined], [60], [90]];

    elem("input").element.setAttribute("value", "1:30");
    await elem("input").trigger("change");
    expect(wrapper.emitted("update:modelValue")).toStrictEqual(expected);
  }
});

test.each([
  {
    hoursDown: undefined,
    hoursUp: [[60]],
    minutesDown: [[60]],
    minutesUp: [[60], [15]]
  },
  {
    hoursDown: [[undefined]],
    hoursUp: [[undefined], [60]],
    minutesDown: [[undefined], [60], [undefined]],
    minutesUp: [[undefined], [60], [undefined], [15]],
    modelValue: 0
  },
  {
    hoursDown: [[undefined]],
    hoursUp: [[undefined], [75]],
    minutesDown: [[undefined], [75], [undefined]],
    minutesUp: [[undefined], [75], [undefined], [30]],
    modelValue: 15
  },
  {
    hoursDown: [[undefined]],
    hoursUp: [[undefined], [120]],
    minutesDown: [[undefined], [120], [45]],
    minutesUp: [[undefined], [120], [45], [75]],
    modelValue: 60
  }
])(
  "timeInput: down/up",
  async ({ hoursDown, hoursUp, minutesDown, minutesUp, modelValue }) => {
    const wrapper = vueTestUtils.mount(TimeInput, {
      global: testUtils.globalMountOptions(),
      props: { modelValue }
    });

    const comp = testUtils.findComponentFactory(".ref-time-input-", wrapper);

    {
      await comp("hours-down").trigger("click");
      expect(wrapper.emitted("update:modelValue")).toStrictEqual(hoursDown);
    }

    {
      await comp("hours-up").trigger("click");
      expect(wrapper.emitted("update:modelValue")).toStrictEqual(hoursUp);
    }

    {
      await comp("minutes-down").trigger("click");
      expect(wrapper.emitted("update:modelValue")).toStrictEqual(minutesDown);
    }

    {
      await comp("minutes-up").trigger("click");
      expect(wrapper.emitted("update:modelValue")).toStrictEqual(minutesUp);
    }
  }
);
