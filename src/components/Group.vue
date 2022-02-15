<script lang="ts">
import { computed, defineComponent } from "vue";

import { compare } from "@skylib/facades/es/compare";
import type { Engine as InlineSearchEngine } from "@skylib/facades/es/inlineSearch";
import { inlineSearch } from "@skylib/facades/es/inlineSearch";
import * as a from "@skylib/functions/es/array";
import * as is from "@skylib/functions/es/guards";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import { rootElementPropsOptions, useRootElement } from "./api/rootElement";
import type {
  GroupItem,
  GroupItems,
  GroupOwnProps,
  GroupParentProps
} from "./Group.extras";
import { isGroupItems } from "./Group.extras";

export default defineComponent({
  name: "m-group",
  inheritAttrs: false,
  props: {
    ...propsToPropDefinitions<GroupParentProps>(),
    ...rootElementPropsOptions,
    items: propOptions.required(isGroupItems),
    notFoundLabel: propOptions(is.stringU),
    searchString: propOptions(is.stringU)
  },
  setup(props) {
    validateProps<GroupOwnProps>(props);

    const filteredItems = computed<GroupItems>(() => {
      if (is.not.empty(props.searchString)) {
        const ids = new Set(
          searchIndex.value.search(props.searchString).map(item => item.id)
        );

        return sortedItems.value.map(item => {
          return { ...item, show: item.show && ids.has(item.id) };
        });
      }

      return sortedItems.value;
    });

    const searchIndex = computed<InlineSearchEngine<GroupItem>>(() =>
      inlineSearch.create("id", ["title"], props.items)
    );

    const sortedItems = computed<GroupItems>(() =>
      a.sort(props.items, (item1, item2) =>
        compare.strings(item1.title, item2.title)
      )
    );

    return {
      filteredItems,
      notFoundLabelExists: computed<boolean>(() =>
        is.not.empty(props.notFoundLabel)
      ),
      notFoundLabelShow: computed<boolean>(
        () => !filteredItems.value.some(item => item.show)
      ),
      rootComponent: useRootElement(props)
    };
  }
});
</script>

<template>
  <component
    v-bind="$attrs"
    :is="rootComponent"
    v-for="item in filteredItems"
    v-show="item.show"
    :key="item.id"
  >
    <slot :name="item.id"></slot>
  </component>
  <component
    v-bind="$attrs"
    :is="rootComponent"
    v-if="notFoundLabelExists"
    v-show="notFoundLabelShow"
    class="ref-group-not-found text-grey-7"
  >
    {{ notFoundLabel }}
  </component>
</template>
