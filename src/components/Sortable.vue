<script lang="ts">
import { computed, defineComponent } from "vue";
import VueDraggable from "vuedraggable";

import * as a from "@skylib/functions/es/array";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as reflect from "@skylib/functions/es/reflect";
import type { objects, Writable } from "@skylib/functions/es/types/core";

import { propOptions, validateEmit, validateProps } from "./api";
import { useSlotsNames } from "./api/slotNames";
import type { Elems, SortableProps, SortableSlots } from "./Sortable.extras";
import {
  buildElements,
  injectSortableSettings,
  isElems,
  isItemClassFnU,
  isMoveData,
  isMoveU
} from "./Sortable.extras";
import { useDisableTooltips } from "./Tooltip.extras";

export default defineComponent({
  name: "m-sortable",
  components: {
    "vue-draggable": VueDraggable
  },
  props: {
    group: propOptions.required(is.string),
    itemClass: propOptions(is.stringU),
    itemClassFn: propOptions(isItemClassFnU),
    itemKey: propOptions.required(is.string),
    itemTag: propOptions.default(is.unknown, "div"),
    modelValue: propOptions.required(is.objects),
    move: propOptions(isMoveU)
  },
  emits: {
    "dropped": (item: object, group: string) =>
      is.object(item) && is.string(group),
    "itemClick": (item: object) => is.object(item),
    "update:modelValue": (value: objects) => is.objects(value)
  },
  setup(props, { emit }) {
    validateEmit<SortableProps>(emit);
    validateProps<SortableProps>(props);

    const { active } = useDisableTooltips();

    return {
      baseMove(data: unknown): boolean {
        assert.byGuard(data, isMoveData);

        const destAttrs = data.related.attributes;

        const sourceAttrs = data.dragged.attributes;

        const destId = destAttrs.getNamedItem("data-id");

        const destGroup = destAttrs.getNamedItem("data-group");

        const sourceId = sourceAttrs.getNamedItem("data-id");

        const sourceGroup = sourceAttrs.getNamedItem("data-group");

        assert.not.empty(destGroup);
        assert.not.empty(sourceId);
        assert.not.empty(sourceGroup);

        return props.move
          ? props.move(
              destId?.value,
              destGroup.value,
              sourceId.value,
              sourceGroup.value
            )
          : true;
      },
      elements: computed<Writable<Elems>>(() =>
        a.clone(buildElements(props.modelValue, props.group, props.itemKey))
      ),
      end(): void {
        active.value = false;
      },
      itemSlotData(data: unknown): object {
        assert.object(data);

        return data;
      },
      settings: injectSortableSettings(),
      slotNames: useSlotsNames<SortableSlots>()("footer", "header", "item"),
      start(): void {
        active.value = true;
      },
      updateModel(elements: unknown): void {
        assert.byGuard(elements, isElems);

        for (const element of elements)
          if (
            element.group === props.group &&
            props.modelValue.some(
              item => reflect.get(item, props.itemKey) === element.id
            )
          ) {
            // Sorted or untouched
          } else emit("dropped", element.item, element.group);

        emit(
          "update:modelValue",
          elements.map(element => element.item)
        );
      }
    };
  }
});
</script>

<template>
  <vue-draggable
    :animation="settings.animationDuration"
    :data-group="group"
    :group="{
      name: group,
      pull: 'clone',
      put: true
    }"
    item-key="elementId"
    :model-value="elements"
    :move="baseMove"
    @end="end"
    @start="start"
    @update:model-value="updateModel"
  >
    <template v-if="$slots[slotNames.header]" #header>
      <slot :name="slotNames.header"></slot>
    </template>
    <template v-if="$slots[slotNames.footer]" #footer>
      <slot :name="slotNames.footer"></slot>
    </template>
    <template #item="{ element }">
      <component
        :is="itemTag"
        :class="`${itemClass} ${itemClassFn?.(element.item)}`"
        :data-group="element.group"
        :data-id="element.id"
        @click="$emit('itemClick', element.item)"
      >
        <slot :item="itemSlotData(element.item)" :name="slotNames.item"></slot>
      </component>
    </template>
  </vue-draggable>
</template>
