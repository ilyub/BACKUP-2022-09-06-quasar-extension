import { components, testComponents } from "@";
import * as testUtils from "@/test-utils";
// eslint-disable-next-line @skylib/consistent-import -- Ok
import * as mdi from "@mdi/js-dynamic";
import { o, wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QTooltip } from "quasar";
import { nextTick } from "vue";

let counter = 0;

const icons = o
  .keys(mdi)
  .filter(id => id.startsWith("mdi"))
  .slice(0, 10)
  .map(icon => mdi[icon]);

functionsTestUtils.installFakeTimer();

test.each([
  { expected: [icons[0]], index: 0 },
  {
    expected: [undefined],
    index: 1,
    modelValue: icons[1]
  }
])("pick-icon", async ({ expected, index, modelValue }) => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(components.IconPicker, {
      global: testUtils.globalMountOptions(),
      props: { modelValue, placeholder: "" }
    });

    const main = wrapper.findComponent(testComponents.IconButton);

    const { comp, compElem } = testUtils.findFactory("icon-picker", wrapper);

    {
      expect(comp("dialog")).not.toExist();
      await main.trigger("click");
      expect(compElem("dialog", "loading").exists()).toBe(!counter);
      await wait(1000);
      expect(compElem("dialog", "loading")).not.toExist();
      counter++;
    }

    {
      await comp("pick-icon", index).trigger("click");
      expect(wrapper).toHaveEmitted("update:modelValue", expected);
    }
  });
});

test("prev, next", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(components.IconPicker, {
      global: testUtils.globalMountOptions(),
      props: { placeholder: "" }
    });

    const main = wrapper.findComponent(testComponents.IconButton);

    const { comp, compElem } = testUtils.findFactory("icon-picker", wrapper);

    {
      expect(comp("dialog")).not.toExist();
      await main.trigger("click");
      expect(compElem("dialog", "loading").exists()).toBe(!counter);
      await wait(1000);
      expect(compElem("dialog", "loading")).not.toExist();
      counter++;
    }

    {
      expect(comp("prev")).toHaveClass("disabled");
      expect(comp("next")).not.toHaveClass("disabled");
      await comp("next").trigger("click");
      expect(comp("next")).not.toHaveClass("disabled");
      expect(comp("next")).not.toHaveClass("disabled");
    }

    {
      await comp("prev").trigger("click");
      expect(comp("prev")).toHaveClass("disabled");
      expect(comp("next")).not.toHaveClass("disabled");
    }
  });
});

test("search", async () => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(components.IconPicker, {
      global: testUtils.globalMountOptions(),
      props: { placeholder: "" }
    });

    const main = wrapper.findComponent(testComponents.IconButton);

    const { comp, compElem } = testUtils.findFactory("icon-picker", wrapper);

    {
      expect(comp("dialog")).not.toExist();
      await main.trigger("click");
      expect(compElem("dialog", "loading").exists()).toBe(!counter);
      await wait(1000);
      expect(compElem("dialog", "loading")).not.toExist();
      counter++;
    }

    {
      expect(comp("prev")).toHaveClass("disabled");
      expect(comp("next")).not.toHaveClass("disabled");
      expect(compElem("dialog", "pagination")).not.toHaveClass("invisible");
      comp("search").vm.$emit("update:modelValue", "aB3umD5inT7g");
      await nextTick();
      expect(comp("prev")).toHaveClass("disabled");
      expect(comp("next")).toHaveClass("disabled");
      expect(compElem("dialog", "pagination")).toHaveClass("invisible");
    }
  });
});

test.each([true, false])("setting: tooltip", async iconTooltips => {
  expect.hasAssertions();

  await functionsTestUtils.run(async () => {
    const wrapper = vueTestUtils.mount(components.IconPicker, {
      global: testUtils.globalMountOptions({
        iconPickerSettings: {
          cols: 7,
          iconTooltips,
          rows: 5,
          spinnerSize: "70px"
        }
      }),
      props: { placeholder: "" }
    });

    const main = wrapper.findComponent(testComponents.IconButton);

    const { comp, compElem } = testUtils.findFactory("icon-picker", wrapper);

    {
      expect(comp("dialog")).not.toExist();
      await main.trigger("click");
      expect(compElem("dialog", "loading").exists()).toBe(!counter);
      await wait(1000);
      expect(compElem("dialog", "loading")).not.toExist();
      counter++;
    }

    {
      const tooltop = comp("pick-icon").findComponent(QTooltip);

      expect(tooltop.exists()).toBe(iconTooltips);
    }
  });
});
