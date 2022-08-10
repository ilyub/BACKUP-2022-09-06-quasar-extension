/* eslint jest/max-expects: [warn, { max: 4 }] -- Ok */
/* eslint-disable @skylib/no-at-sign-internal-import -- Ok */
/* eslint-disable @skylib/no-internal-modules -- Ok */

import * as testUtils from "@/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { as, evaluate, o, typedef } from "@skylib/functions";
import type { MoveData } from "@/components/Sortable.internal";
import VueDraggable from "vuedraggable";
import { buildElements } from "@/components/Sortable.internal";
import { components } from "@";
import { disableCounter } from "@/components/Tooltip.internal";
import type { extras } from "@";
import { nextTick } from "vue";

const props = {
  group: "sample-group",
  itemKey: "id",
  modelValue: typedef<Items>([
    { id: "id1", name: "Name 1" },
    { id: "id2", name: "Name 2" },
    { id: "id3", name: "Name 3" }
  ])
} as const;

interface Item {
  readonly id: string;
  readonly name: string;
}

type Items = readonly Item[];

test("emit: dropped", () => {
  const wrapper = vueTestUtils.mount(components.Sortable, {
    global: testUtils.globalMountOptions(),
    props
  });

  const main = wrapper.findComponent(VueDraggable);

  const items: Items = [
    { id: "id2", name: "Name 2" },
    { id: "id1", name: "Name 1" },
    { id: "id3", name: "Name 3" }
  ];

  const elements = buildElements(items, props.group, props.itemKey);

  const expected = [items] as const;

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

  const item = { id: "id4", name: "Name 4" } as const;

  const sourceGroup = "another-group";

  const elements = [
    ...buildElements(props.modelValue, props.group, props.itemKey),
    ...buildElements([item], sourceGroup, props.itemKey)
  ] as const;

  const expected = [[...props.modelValue, item]] as const;

  const expectedDropped = [item, sourceGroup] as const;

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

  const moveData = evaluate((): MoveData => {
    const dragged = document.createElement("div");

    const related = document.createElement("div");

    for (const [key, value] of o.entries(source))
      dragged.setAttribute(`data-${key}`, value);

    for (const [key, value] of o.entries(dest))
      related.setAttribute(`data-${key}`, value);

    return { dragged, related };
  });

  const expected = [dest.id, dest.group, source.id, source.group] as const;

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
