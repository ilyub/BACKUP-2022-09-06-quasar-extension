import { components } from "@";
import { buildElements } from "@/components/Sortable.internal";
import { disableCounter } from "@/components/Tooltip.internal";
import * as testUtils from "@/test-utils";
import { as, evaluate, o, typedef } from "@skylib/functions";
import * as vueTestUtils from "@vue/test-utils";
import { nextTick } from "vue";
import VueDraggable from "vuedraggable";
import type { extras } from "@";

const props = {
  group: "sample-group",
  itemKey: "id",
  modelValue: [
    { id: "id1", name: "Name 1" },
    { id: "id2", name: "Name 2" },
    { id: "id3", name: "Name 3" }
  ]
} as const;

test("emit: dropped", () => {
  const wrapper = vueTestUtils.mount(components.Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const main = wrapper.findComponent(VueDraggable);

  const items = [
    { id: "id2", name: "Name 2" },
    { id: "id1", name: "Name 1" },
    { id: "id3", name: "Name 3" }
  ];

  const elements = buildElements(items, props.group, props.itemKey);

  const expected = [items];

  main.vm.$emit("update:modelValue", elements);
  expect(wrapper).toHaveEmitted("update:modelValue", expected);
});

test("emit: itemClick", async () => {
  const wrapper = vueTestUtils.mount(components.Sortable, {
    global: testUtils.globalMountOptions({}),
    props: { ...props, itemClass: "sample-item" }
  });

  const expected = props.modelValue.map(item => [item]);

  await wrapper.find(".sample-item:nth-child(1)").trigger("click");
  await wrapper.find(".sample-item:nth-child(2)").trigger("click");
  await wrapper.find(".sample-item:nth-child(3)").trigger("click");
  expect(wrapper).toHaveEmitted("itemClick", ...expected);
});

test("emit: update:modelValue", () => {
  const wrapper = vueTestUtils.mount(components.Sortable, {
    global: testUtils.globalMountOptions({}),
    props
  });

  const main = wrapper.findComponent(VueDraggable);

  const item = { id: "id4", name: "Name 4" };

  const sourceGroup = "another-group";

  const elements = [
    ...buildElements(props.modelValue, props.group, props.itemKey),
    ...buildElements([item], sourceGroup, props.itemKey)
  ];

  const expected = [[...props.modelValue, item]];

  const expectedDropped = [item, sourceGroup];

  main.vm.$emit("update:modelValue", elements);
  expect(wrapper).toHaveEmitted("update:modelValue", expected);
  expect(wrapper).toHaveEmitted("dropped", expectedDropped);
});

test("main: start, end", async () => {
  const wrapper = vueTestUtils.mount(components.Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const main = wrapper.findComponent(VueDraggable);

  {
    main.vm.$emit("start");
    await nextTick();
    expect(disableCounter.value).toBe(1);
  }

  {
    main.vm.$emit("end");
    await nextTick();
    expect(disableCounter.value).toBe(0);
  }

  {
    main.vm.$emit("start");
    await nextTick();
    expect(disableCounter.value).toBe(1);
  }

  {
    wrapper.unmount();
    expect(disableCounter.value).toBe(0);
  }
});

test.each([
  {
    dest: { group: "dest-group" },
    source: { group: "source-group", id: "source-id" }
  },
  {
    dest: { group: "dest-group", id: "dest-id" },
    source: { group: "source-group", id: "source-id" }
  }
])("prop: move", async ({ dest, source }) => {
  const wrapper = vueTestUtils.mount(components.Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const main = wrapper.findComponent(VueDraggable);

  const baseMove = as.callable(main.props("move"));

  const move = jest.fn();

  const moveData = evaluate(() => {
    const dragged = document.createElement("div");

    const related = document.createElement("div");

    for (const [key, value] of o.entries(source))
      dragged.setAttribute(`data-${key}`, value);

    for (const [key, value] of o.entries(dest))
      related.setAttribute(`data-${key}`, value);

    return { dragged, related };
  });

  const expected = [dest.id, dest.group, source.id, source.group];

  baseMove(moveData);
  await wrapper.setProps({ move });
  baseMove(moveData);
  expect(move).mockCallsToBe(expected);
});

test.each([
  {
    expected: false,
    pull: true,
    put: true,
    sort: true
  },
  {
    expected: true,
    pull: true,
    put: true,
    sort: true,
    sortableSettings: typedef<extras.Sortable.Settings>({
      animationDuration: 500,
      disableDropping: true,
      disableSorting: true
    })
  },
  {
    expected: true,
    pull: false,
    put: false,
    sort: false
  }
])(
  "prop: pull, put, sort",
  ({ expected, pull, put, sort, sortableSettings }) => {
    const wrapper = vueTestUtils.mount(components.Sortable, {
      global: testUtils.globalMountOptions(
        o.removeUndefinedKeys({ sortableSettings })
      ),
      props: {
        ...props,
        pull,
        put,
        sort
      }
    });

    const main = wrapper.findComponent(VueDraggable);

    expect(main.vm.$attrs["disabled"]).toBe(expected);
  }
);
