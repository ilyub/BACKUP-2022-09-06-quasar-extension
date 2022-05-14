import { components } from "@";
import * as testUtils from "@/test-utils";
import { o } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";

test.each([
  { closeButton: true, expected: false },
  {
    closeButton: true,
    expected: true,
    title: "Sample title"
  },
  {
    closeButton: true,
    closeButtonOff: true,
    expected: false,
    title: "Sample title"
  },
  {
    closeButton: false,
    expected: false,
    title: "Sample title"
  },
  {
    closeButton: false,
    closeButtonOn: true,
    expected: true,
    title: "Sample title"
  }
])(
  "prop: closeButtonOn, closeButtonOff",
  ({ closeButton, closeButtonOff, closeButtonOn, expected, title }) => {
    const wrapper = vueTestUtils.mount(components.PageLayout, {
      global: testUtils.globalMountOptions({
        pageLayoutSettings: { closeButton, height: "auto" }
      }),
      props: o.removeUndefinedKeys({
        closeButtonOff,
        closeButtonOn,
        title
      })
    });

    const { comp } = testUtils.findFactory("page-layout", wrapper);

    expect(comp("close").exists()).toStrictEqual(expected);
  }
);

test.each([{ expected: false }, { expected: true, title: "Sample title" }])(
  "prop: title",
  ({ expected, title }) => {
    const wrapper = vueTestUtils.mount(components.PageLayout, {
      global: testUtils.globalMountOptions(),
      props: o.removeUndefinedKeys({ title })
    });

    const { elem } = testUtils.findFactory("page-layout", wrapper);

    expect(elem("title").exists()).toStrictEqual(expected);
  }
);
