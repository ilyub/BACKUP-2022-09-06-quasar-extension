/* eslint-disable jest/no-conditional-expect */

/* eslint-disable jest/no-conditional-in-test */

import * as vueTestUtils from "@vue/test-utils";

import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";

import { injectPageOffset } from "@/components/api/pageContentHeight";
import type { PageLayoutSettings } from "@/components/PageLayout.extras";
import PageLayout from "@/components/PageLayout.vue";
import * as testUtils from "@/testUtils";

const pageLayoutSettings1: PageLayoutSettings = {
  closeButton: false,
  headerHeight: "50px",
  paddingX: "10px",
  paddingY: "10px"
};

const pageLayoutSettings2: PageLayoutSettings = {
  closeButton: true,
  headerHeight: "50px",
  paddingX: "10px",
  paddingY: "10px"
};

test.each([
  {},
  {
    expectedPageOffset: "((15px) + 2 * 10px)",
    pageLayoutSettings: pageLayoutSettings1,
    pageOffset: "15px"
  },
  {
    expectedPageOffset: "((25px) + 2 * 10px + 50px)",
    pageLayoutSettings: pageLayoutSettings1,
    pageOffset: "25px",
    title: "Sample title"
  },
  {
    expectedPageOffset: "((35px) + 2 * 10px + 50px)",
    pageLayoutSettings: pageLayoutSettings2,
    pageOffset: "35px",
    title: "Sample title"
  }
])(
  "pageLayout",
  async ({ expectedPageOffset, pageLayoutSettings, pageOffset, title }) => {
    const injectPageOffsetCallback = jest.fn();

    const wrapper = vueTestUtils.mount(PageLayout, {
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
      expect(injectPageOffsetCallback).toHaveBeenCalledTimes(1);
      expect(injectPageOffsetCallback).toHaveBeenCalledWith(expectedPageOffset);
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
  }
);
