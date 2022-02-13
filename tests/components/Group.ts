import * as vueTestUtils from "@vue/test-utils";

import * as o from "@skylib/functions/es/object";

import type { Component, GroupItems } from "@/components/Group.extras";
import Group from "@/components/Group.vue";
import * as testUtils from "@/testUtils";

const component1: Component = "div";

const component2: Component = "page-section";

const component3: Component = "section";

it.each([
  {},
  {
    component: component1
  },
  {
    component: component2
  },
  {
    component: component3
  }
])("Group", async ({ component }) => {
  const items: GroupItems = [
    {
      id: "section2",
      show: true,
      title: "Section 2 bbb ccc"
    },
    {
      id: "section1",
      show: true,
      title: "Section 1 aaa bbb"
    },
    {
      id: "section3",
      show: true,
      title: "Section 11 ccc ddd"
    },
    {
      id: "section4",
      show: false,
      title: "Section 12 ddd eee"
    }
  ];

  const wrapper = vueTestUtils.mount(Group, {
    global: testUtils.globalMountOptions(),
    props: o.removeUndefinedKeys({
      component,
      items,
      notFoundLabel: "No results found"
    }),
    slots: {
      section1: '<div class="slot">slot-1</div>',
      section2: '<div class="slot">slot-2</div>',
      section3: '<div class="slot">slot-3</div>',
      section4: '<div class="slot">slot-4</div>'
    }
  });

  const notFound = wrapper.find(".not-found");

  const slots = wrapper.findAll(".slot");

  {
    const expected = ["slot-1", "slot-2", "slot-3", "slot-4"];

    expect(notFound).textToEqual("No results found");
    expect(slots.map(slot => slot.text())).toStrictEqual(expected);
  }

  {
    const expected = [true, true, true, false];

    expect(notFound).not.toBeVisible();
    expect(slots.map(slot => slot.isVisible())).toStrictEqual(expected);
  }

  {
    const expected = [true, true, false, false];

    await wrapper.setProps({ searchString: "bbb" });
    expect(notFound).not.toBeVisible();
    expect(slots.map(slot => slot.isVisible())).toStrictEqual(expected);
  }

  {
    const expected = [false, true, true, false];

    await wrapper.setProps({ searchString: "ccc" });
    expect(notFound).not.toBeVisible();
    expect(slots.map(slot => slot.isVisible())).toStrictEqual(expected);
  }

  {
    const expected = [false, false, false, false];

    await wrapper.setProps({ searchString: "eee" });
    expect(notFound).toBeVisible();
    expect(slots.map(slot => slot.isVisible())).toStrictEqual(expected);
  }
});
