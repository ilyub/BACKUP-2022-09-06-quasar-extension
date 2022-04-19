<script lang="ts">
import { inlineSearch, compare } from "@skylib/facades";
import { a, is } from "@skylib/functions";
import { computed, defineComponent } from "vue";
import type {
  GroupItem,
  GroupItems,
  GroupOwnProps,
  GroupParentProps,
  RootElementProp
} from "./Group.extras";
import { useRootElement } from "./Group.extras";
import { prop, propsToPropDefinitions, validateProps } from "./api";

const rootElementPropsOptions = {
  rootElement: prop<RootElementProp>()
} as const;

export default defineComponent({
  name: "m-group",
  inheritAttrs: false,
  props: {
    ...propsToPropDefinitions<GroupParentProps>(),
    ...rootElementPropsOptions,
    items: prop.required<GroupItems>(),
    notFoundLabel: prop<string>(),
    searchString: prop<string>()
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

    const searchIndex = computed<inlineSearch.Engine<GroupItem>>(() =>
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
  <keep-alive v-for="item in filteredItems" :key="item.id">
    <component v-bind="$attrs" :is="rootComponent" v-if="item.show">
      <slot :name="item.id"></slot>
    </component>
  </keep-alive>
  <keep-alive>
    <component
      v-bind="$attrs"
      :is="rootComponent"
      v-if="notFoundLabelShow && notFoundLabelExists"
      class="ref-group-not-found text-grey-7"
    >
      {{ notFoundLabel }}
    </component>
  </keep-alive>
</template>
