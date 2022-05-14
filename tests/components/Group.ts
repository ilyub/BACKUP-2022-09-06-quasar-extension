import { components } from "@";
import * as testUtils from "@/test-utils";
import { typedef } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import type { extras } from "@";

test.each([
  {
    expectedNotFound: false,
    expectedSlots: ["slot-1", "slot-2", "slot-3"],
    selector: ".m-group"
  },
  {
    expectedNotFound: false,
    expectedSlots: ["slot-2", "slot-3"],
    rootElement: typedef<extras.Group.RootElement>("page-section"),
    searchString: "ccc",
    selector: ".m-group.m-page-section"
  },
  {
    expectedNotFound: false,
    expectedSlots: ["slot-3"],
    rootElement: typedef<extras.Group.RootElement>("section"),
    searchString: "ddd",
    selector: ".m-group.m-section"
  },
  {
    expectedNotFound: true,
    expectedSlots: [],
    rootElement: typedef<extras.Group.RootElement>("subsection"),
    searchString: "ee",
    selector: ".m-group.m-group__not-found.m-subsection"
  }
])(
  "Group",
  ({
    expectedNotFound,
    expectedSlots,
    rootElement,
    searchString,
    selector
  }) => {
    const wrapper = vueTestUtils.mount(components.Group, {
      global: testUtils.globalMountOptions(),
      props: {
        items: typedef<extras.Group.Items>([
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
        ]),
        notFoundLabel: "No results found",
        rootElement,
        searchString
      },
      slots: {
        section1: '<div data-debug="group__slot">slot-1</div>',
        section2: '<div data-debug="group__slot">slot-2</div>',
        section3: '<div data-debug="group__slot">slot-3</div>',
        section4: '<div data-debug="group__slot">slot-4</div>'
      }
    });

    const { elem, elems } = testUtils.findFactory("group", wrapper);

    expect(wrapper.find(selector)).toExist();
    expect(elems("slot").map(slot => slot.text())).toStrictEqual(expectedSlots);
    expect(elem("not-found").exists()).toStrictEqual(expectedNotFound);
  }
);
