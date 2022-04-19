import { o } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { components } from "@";
import * as testUtils from "@/testUtils";

// eslint-disable-next-line no-warning-comments
// fixme: Use @skylib/functions
function typedef<T>(source: T): T {
  return source;
}

test.each([
  { closeExists: false, titleExists: false },
  {
    closeExists: true,
    title: "Sample title",
    titleExists: true
  },
  {
    closeButtonOff: true,
    closeExists: false,
    title: "Sample title",
    titleExists: true
  },
  {
    closeExists: false,
    pageLayoutSettings: typedef<components.PageLayoutSettings>({
      closeButton: false,
      height: "auto"
    }),
    title: "Sample title",
    titleExists: true
  },
  {
    closeButtonOn: true,
    closeExists: true,
    pageLayoutSettings: typedef<components.PageLayoutSettings>({
      closeButton: false,
      height: "auto"
    }),
    title: "Sample title",
    titleExists: true
  }
])(
  "title",
  ({
    closeButtonOff,
    closeButtonOn,
    closeExists,
    pageLayoutSettings,
    title,
    titleExists
  }) => {
    const wrapper = vueTestUtils.mount(components.PageLayout, {
      global: testUtils.globalMountOptions(
        o.removeUndefinedKeys({ pageLayoutSettings })
      ),
      props: o.removeUndefinedKeys({
        closeButtonOff,
        closeButtonOn,
        title
      })
    });

    const { comp, elem } = testUtils.findFactory(".m-page-layout__", wrapper);

    expect(elem("title").exists()).toStrictEqual(titleExists);
    expect(comp("close").exists()).toStrictEqual(closeExists);
  }
);
