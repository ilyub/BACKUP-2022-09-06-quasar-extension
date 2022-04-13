import * as o from "@skylib/functions/es/object";
import * as vueTestUtils from "@vue/test-utils";
import type { GroupItems } from "@/components/Group.extras";
import Group from "@/components/Group.vue";
import type { RootElementProp } from "@/components/api/rootElement";
import * as testUtils from "@/testUtils";

const rootElement1: RootElementProp = "div";

const rootElement2: RootElementProp = "page-section";

const rootElement3: RootElementProp = "section";

const rootElement4: RootElementProp = "subsection";

test.each([
  {},
  { rootElement: rootElement1 },
  { rootElement: rootElement2 },
  { rootElement: rootElement3 },
  { rootElement: rootElement4 }
])("group", async ({ rootElement }) => {
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
      items,
      notFoundLabel: "No results found",
      rootElement
    }),
    slots: {
      section1: '<div class="ref-group-slot">slot-1</div>',
      section2: '<div class="ref-group-slot">slot-2</div>',
      section3: '<div class="ref-group-slot">slot-3</div>',
      section4: '<div class="ref-group-slot">slot-4</div>'
    }
  });

  const { elem, elems } = testUtils.findFactory(".ref-group-", wrapper);

  {
    const expected = ["slot-1", "slot-2", "slot-3"];

    expect(elems("slot").map(slot => slot.text())).toStrictEqual(expected);
  }

  {
    const expected = ["slot-2", "slot-3"];

    await wrapper.setProps({ searchString: "ccc" });
    expect(elem("not-found")).not.toExist();
    expect(elems("slot").map(slot => slot.text())).toStrictEqual(expected);
  }

  {
    await wrapper.setProps({ searchString: "fff" });
    expect(elem("not-found")).toExist();
    expect(elems("slot").map(slot => slot.text())).toStrictEqual([]);
  }
});
