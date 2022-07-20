/* eslint jest/max-expects: [warn, { max: 5 }] -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";
import { components } from "@";
import type { extras } from "@";
import { is } from "@skylib/functions";

test.each([undefined, "2001-02-03 10:30"])("control", async modelValue => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { comp, elem } = testUtils.findFactory("datetime-picker", wrapper);

  expect(comp("date")).not.toExist();
  expect(comp("time")).not.toExist();
  await elem("control").trigger("click");
  expect(comp("date").exists()).toBe(is.empty(modelValue));
  expect(comp("time").exists()).toBe(is.not.empty(modelValue));
});

test.each([undefined, "2001-02-03 10:30"])("date", async modelValue => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { comp, compElem, elem } = testUtils.findFactory(
    "datetime-picker",
    wrapper
  );

  {
    const expected = [modelValue] as const;

    await elem("show-date").trigger("click");
    comp("date-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 23:30"] as const;

    comp("date").vm.$emit("update:modelValue", "2001-02-04 23:30");
    comp("date-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 11:30"] as const;

    comp("pm").vm.$emit("click");
    comp("date-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    expect(comp("time")).not.toExist();
    await compElem("dialog", "next").trigger("click");
    expect(comp("time")).toExist();
  }
});

test.each([null, undefined])("field", value => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue: "2001-02-03 10:30" }
  });

  const main = testUtils.findQuasarComponent(wrapper, QField);

  main.vm.$emit("update:modelValue", value);
  expect(wrapper).toHaveEmitted("update:modelValue", [undefined]);
});

test("prop: min, max", async () => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: {
      max: "2001-02-03 14:30",
      min: "2001-02-03 12:30",
      modelValue: "2001-02-03 10:30"
    }
  });

  const { elem, vm } = testUtils.findFactory<extras.DatetimePicker.Global>(
    "datetime-picker",
    wrapper
  );

  {
    const dates = [
      ["2001/02/02", false],
      ["2001/02/03", true],
      ["2001/02/04", false]
    ] as const;

    const times = [
      [11, null, true],
      [12, null, true],
      [13, null, true],
      [14, null, true],
      [15, null, true]
    ] as const;

    const gotDates = dates.map(date => vm.dateOptions(date[0]));

    const gotTimes = times.map(time => vm.timeOptions(time[0], time[1]));

    const expectedDates = dates.map(date => date[1]);

    const expectedTimes = times.map(time => time[2]);

    expect(gotDates).toStrictEqual(expectedDates);
    expect(gotTimes).toStrictEqual(expectedTimes);
  }

  {
    await elem("control").trigger("click");

    const dates = [
      ["2001/02/02", false],
      ["2001/02/03", true],
      ["2001/02/04", false]
    ] as const;

    const times = [
      [11, null, false],
      [12, null, true],
      [13, null, true],
      [14, null, true],
      [15, null, false],
      [12, 29, false],
      [12, 30, true],
      [14, 30, true],
      [14, 31, false]
    ] as const;

    const gotDates = dates.map(date => vm.dateOptions(date[0]));

    const gotTimes = times.map(time => vm.timeOptions(time[0], time[1]));

    const expectedDates = dates.map(date => date[1]);

    const expectedTimes = times.map(time => time[2]);

    expect(gotDates).toStrictEqual(expectedDates);
    expect(gotTimes).toStrictEqual(expectedTimes);
  }
});

test.each([undefined, "2001-02-03 10:30"])("show-date", async modelValue => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { comp, elem } = testUtils.findFactory("datetime-picker", wrapper);

  expect(comp("date")).not.toExist();
  await elem("show-date").trigger("click");
  expect(comp("date")).toExist();
});

test.each([undefined, "2001-02-03 10:30"])("show-time", async modelValue => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { comp, elem } = testUtils.findFactory("datetime-picker", wrapper);

  expect(comp("time")).not.toExist();
  await elem("show-time").trigger("click");
  expect(comp("time")).toExist();
});

test.each([undefined, "2001-02-03 10:30"])("time", async modelValue => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { comp, compElem, elem } = testUtils.findFactory(
    "datetime-picker",
    wrapper
  );

  {
    const expected = [modelValue] as const;

    await elem("show-time").trigger("click");
    comp("time-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 23:30"] as const;

    comp("time").vm.$emit("update:modelValue", "2001-02-04 23:30");
    comp("time-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 11:30"] as const;

    comp("pm").vm.$emit("click");
    comp("time-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    expect(comp("date")).not.toExist();
    await compElem("dialog", "prev").trigger("click");
    expect(comp("date")).toExist();
  }
});
