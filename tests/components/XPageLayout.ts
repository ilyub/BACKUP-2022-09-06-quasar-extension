import * as vueTestUtils from "@vue/test-utils";

import * as fn from "@skylib/functions/es/function";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

import { injectPageOffset } from "@/components/api/pageContentHeight";
import XIconButton from "@/components/XIconButton.vue";
import type { PageLayoutSettings } from "@/components/XPageLayout.extras";
import XPageLayout from "@/components/XPageLayout.vue";
import * as testUtils from "@/testUtils";

const pageLayoutSettings1: PageLayoutSettings = {
  closeButton: false,
  headerHeight: "50px",
  paddingX: "10px",
  paddingY: "10px",
  sectionMargin: "10px"
};

const pageLayoutSettings2: PageLayoutSettings = {
  closeButton: true,
  headerHeight: "50px",
  paddingX: "10px",
  paddingY: "10px",
  sectionMargin: "10px"
};

it.each([
  {},
  {
    pageLayoutSettings: pageLayoutSettings1,
    pageOffset: "10px"
  },
  {
    pageLayoutSettings: pageLayoutSettings1,
    pageOffset: "20px",
    title: "Sample title"
  },
  {
    pageLayoutSettings: pageLayoutSettings2,
    pageOffset: "30px",
    title: "Sample title"
  }
])("XPageLayout", async ({ pageLayoutSettings, pageOffset, title }) => {
  const injectPageOffsetCallback = jest.fn();

  const wrapper = vueTestUtils.mount(XPageLayout, {
    components: {
      "x-icon-button": XIconButton
    },
    global: testUtils.globalMountOptions(
      o.removeUndefinedKeys({
        pageLayoutSettings,
        pageOffset
      })
    ),
    props: {
      title
    },
    slots: {
      default: {
        setup() {
          injectPageOffsetCallback(injectPageOffset().value);
        },
        template: "<div></div>"
      }
    }
  });

  {
    const expected = fn.run(() => {
      if (is.not.empty(pageOffset))
        return is.not.empty(title)
          ? `((${pageOffset}) + 2 * 10px + 50px)`
          : `((${pageOffset}) + 2 * 10px)`;

      return undefined;
    });

    expect(injectPageOffsetCallback).toBeCalledTimes(1);
    expect(injectPageOffsetCallback).toBeCalledWith(expected);
  }

  if (is.not.empty(title)) {
    const closeButton = pageLayoutSettings?.closeButton ?? true;

    const props = closeButton
      ? { hideCloseButton: true }
      : { closeButton: true };

    expect(closeButtonComponent().exists()).toStrictEqual(closeButton);
    await wrapper.setProps(props);
    expect(closeButtonComponent().exists()).toStrictEqual(!closeButton);
  } else {
    const props = { closeButton: true };

    expect(closeButtonComponent()).not.toExist();
    await wrapper.setProps(props);
    expect(closeButtonComponent()).not.toExist();
  }

  function closeButtonComponent(): vueTestUtils.DOMWrapper<Element> {
    return wrapper.find(".ref-close-button");
  }
});
