import { QItem } from "quasar";
import * as vueTestUtils from "@vue/test-utils";

import XMenuItem from "@/components/XMenuItem.vue";
import * as testUtils from "@/testUtils";

it("prop: caption", () => {
  const wrapper = vueTestUtils.mount(XMenuItem, {
    global: testUtils.globalMountOptions(),
    props: {
      caption: "sample-caption"
    }
  });

  expect(wrapper.find(".q-item__section--nowrap")).textToEqual(
    "sample-caption"
  );
});

it("prop: header", async () => {
  const wrapper = vueTestUtils.mount(XMenuItem, {
    global: testUtils.globalMountOptions(),
    props: {
      caption: "sample-caption"
    }
  });

  expect(wrapper.findComponent(QItem).props("clickable")).toBeTrue();
  await wrapper.setProps({ header: true });
  expect(wrapper.findComponent(QItem).props("clickable")).toBeFalse();
});

it("prop: icon", async () => {
  const wrapper = vueTestUtils.mount(XMenuItem, {
    global: testUtils.globalMountOptions(),
    props: {
      caption: "sample-caption"
    }
  });

  expect(wrapper.find(".q-icon")).not.toExist();
  await wrapper.setProps({ icon: "sample-icon" });
  expect(wrapper.find(".q-icon")).textToEqual("sample-icon");
});

it("slot: icon", () => {
  const wrapper = vueTestUtils.mount(XMenuItem, {
    global: testUtils.globalMountOptions(),
    props: {
      caption: "sample-caption"
    },
    slots: {
      icon: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});

it("slot: right", () => {
  const wrapper = vueTestUtils.mount(XMenuItem, {
    global: testUtils.globalMountOptions(),
    props: {
      caption: "sample-caption"
    },
    slots: {
      right: '<div class="sample-class">sample-contents</div>"'
    }
  });

  expect(wrapper.find(".sample-class")).textToEqual("sample-contents");
});
