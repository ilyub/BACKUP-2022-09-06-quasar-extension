<script lang="ts">
import { computed, defineComponent, inject } from "vue";
import vuedraggable from "vuedraggable";

import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";

import { propOptions } from "./api";
import type { Elems, SortableSettings } from "./Sortable.extras";
import {
  buildElements,
  defaultSortableSettings,
  injectSortableSettings,
  isElems,
  isMoveData,
  isMoveU
} from "./Sortable.extras";

export default defineComponent({
  name: "x-sortable",
  components: {
    draggable: vuedraggable
  },
  props: {
    group: propOptions.required(is.string),
    itemComponentData: propOptions(is.objectU),
    itemKey: propOptions.required(is.string),
    itemTag: propOptions.default(is.unknown, "div"),
    modelValue: propOptions.required(is.indexedObjects),
    move: propOptions(isMoveU)
  },
  emits: {
    "dropped"(item: unknown, group: unknown) {
      return is.indexedObject(item) && is.string(group);
    },
    "update:model-value"(value: unknown) {
      return is.indexedObjects(value);
    }
  },
  setup(props, { emit }) {
    return {
      baseMove(data: unknown): boolean {
        assert.byGuard(data, isMoveData);

        const destAttrs = data.related.attributes;

        const sourceAttrs = data.dragged.attributes;

        const destId = destAttrs.getNamedItem("data-id");

        const destGroup = destAttrs.getNamedItem("data-group");

        const sourceId = sourceAttrs.getNamedItem("data-id");

        const sourceGroup = sourceAttrs.getNamedItem("data-group");

        assert.not.empty(destId);
        assert.not.empty(destGroup);
        assert.not.empty(sourceId);
        assert.not.empty(sourceGroup);

        return props.move
          ? props.move(
              destId.value,
              destGroup.value,
              sourceId.value,
              sourceGroup.value
            )
          : true;
      },
      elements: computed<Elems>(() =>
        buildElements(props.modelValue, props.group, props.itemKey)
      ),
      settings: inject(
        injectSortableSettings,
        computed<SortableSettings>(defaultSortableSettings)
      ),
      update(elements: unknown): void {
        assert.byGuard(elements, isElems);

        for (const element of elements)
          if (
            element.group === props.group &&
            props.modelValue.some(item => item[props.itemKey] === element.id)
          ) {
            // Sorted or untouched
          } else emit("dropped", element.item, element.group);

        emit(
          "update:model-value",
          elements.map(element => element.item)
        );
      }
    };
  }
});
</script>

<template>
  <draggable
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
    @update:model-value="update"
  >
    <template #header><slot name="header"></slot></template>
    <template #item="{ element }">
      <component
        :is="itemTag"
        :data-group="element.group"
        :data-id="element.id"
        v-bind="itemComponentData"
      >
        <slot :item="element.item" name="item"></slot>
      </component>
    </template>
    <template #footer><slot name="footer"></slot></template>
  </draggable>
</template>
