import { components } from "@";
import * as testUtils from "@/test-utils";
import { is, o } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";

test.each([undefined, "2001-02-03 10:30"])("control", async modelValue => {
  const wrapper = vueTestUtils.mount(components.DatetimePicker, {
    global: testUtils.globalMountOptions(),
    props: { modelValue }
  });

  const { comp, elem } = testUtils.findFactory("datetime-picker", wrapper);

  expect(comp("date")).not.toExist();
  expect(comp("time")).not.toExist();
  await elem("control").trigger("click");
  expect(comp("date").exists()).toStrictEqual(is.empty(modelValue));
  expect(comp("time").exists()).toStrictEqual(is.not.empty(modelValue));
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
    const expected = [modelValue];

    await elem("show-date").trigger("click");
    comp("date-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 23:30"];

    comp("date").vm.$emit("update:modelValue", "2001-02-04 23:30");
    comp("date-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 11:30"];

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

  const main = wrapper.findComponent(QField);

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

  // eslint-disable-next-line no-restricted-syntax -- Ok
  const dateOptions = o.get(wrapper.vm, "dateOptions", is.callable);

  // eslint-disable-next-line no-restricted-syntax -- Ok
  const timeOptions = o.get(wrapper.vm, "timeOptions", is.callable);

  const { elem } = testUtils.findFactory("datetime-picker", wrapper);

  {
    expect(dateOptions("2001/02/02")).toBeFalse();
    expect(dateOptions("2001/02/03")).toBeTrue();
    expect(dateOptions("2001/02/04")).toBeFalse();
    expect(timeOptions(11)).toBeTrue();
    expect(timeOptions(12)).toBeTrue();
    expect(timeOptions(13)).toBeTrue();
    expect(timeOptions(14)).toBeTrue();
    expect(timeOptions(15)).toBeTrue();
  }

  {
    await elem("control").trigger("click");
    expect(dateOptions("2001/02/02")).toBeFalse();
    expect(dateOptions("2001/02/03")).toBeTrue();
    expect(dateOptions("2001/02/04")).toBeFalse();
    expect(timeOptions(11)).toBeFalse();
    expect(timeOptions(12)).toBeTrue();
    expect(timeOptions(13)).toBeTrue();
    expect(timeOptions(14)).toBeTrue();
    expect(timeOptions(15)).toBeFalse();
    expect(timeOptions(12, 29)).toBeFalse();
    expect(timeOptions(12, 30)).toBeTrue();
    expect(timeOptions(14, 30)).toBeTrue();
    expect(timeOptions(14, 31)).toBeFalse();
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
    const expected = [modelValue];

    await elem("show-time").trigger("click");
    comp("time-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 23:30"];

    comp("time").vm.$emit("update:modelValue", "2001-02-04 23:30");
    comp("time-save").vm.$emit("click");
    expect(wrapper).toHaveEmitted("update:modelValue", expected);
  }

  {
    const expected = ["2001-02-04 11:30"];

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
