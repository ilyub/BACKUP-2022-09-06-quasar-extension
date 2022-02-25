<script lang="ts">
import * as _ from "lodash-es";
import { computed, defineComponent, ref, watch } from "vue";

import { handlePromise } from "@skylib/facades/es/handlePromise";
import type { Engine as InlineSearchEngine } from "@skylib/facades/es/inlineSearch";
import { inlineSearch } from "@skylib/facades/es/inlineSearch";
import { testDelay } from "@skylib/facades/es/testDelay";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { stringU, Writable } from "@skylib/functions/es/types/core";

import { propOptions, propsToPropDefinitions, validateProps } from "./api";
import type {
  IconPickerOwnProps,
  IconPickerParentProps
} from "./IconPicker.extras";
import { icons, injectIconPickerSettings, lang } from "./IconPicker.extras";

interface Button {
  readonly icon?: string;
  readonly padding: boolean;
  readonly selected: boolean;
  readonly tooltip?: stringU;
}

type Buttons = readonly Button[];

type Frame = readonly Buttons[];

interface Item {
  readonly description: string;
  readonly id: keyof Mdi;
}

type Items = readonly Item[];

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Mdi = typeof import("@mdi/js-dynamic");

const mdi = ref<Mdi | undefined>(undefined);

export default defineComponent({
  name: "m-icon-picker",
  props: {
    ...propsToPropDefinitions<IconPickerParentProps>(),
    cols: propOptions.default(is.number, 7),
    modelValue: propOptions(is.stringU),
    placeholder: propOptions.required(is.string),
    rows: propOptions.default(is.number, 5),
    spinnerSize: propOptions.default(is.string, "70px")
  },
  emits: {
    "update:model-value": (value: stringU) => is.stringU(value)
  },
  setup(props, { emit }) {
    validateProps<IconPickerOwnProps>(props);

    const filteredItems = computed<Items>(() =>
      is.not.empty(searchString.value)
        ? searchIndex.value.search(searchString.value)
        : items.value
    );

    const from = computed<number>(() => page.value * pageSize.value + 1);

    const searchIndex = computed<InlineSearchEngine<Item>>(() =>
      inlineSearch.create("id", ["description"], items.value)
    );

    const settings = injectIconPickerSettings();

    const items = computed<Items>(() =>
      mdi.value
        ? o
            .keys(mdi.value)
            .filter(id => id.startsWith("mdi"))
            .map(id => {
              return {
                description: _.kebabCase(id),
                id
              };
            })
        : []
    );

    const page = ref(0);

    const pageSize = computed<number>(() => props.cols * props.rows);

    const searchString = ref<stringU>(undefined);

    const show = ref(false);

    const to = computed<number>(() =>
      Math.min(page.value * pageSize.value + pageSize.value, total.value)
    );

    const total = computed<number>(() => filteredItems.value.length);

    watch(searchString, () => {
      page.value = 0;
    });

    return {
      frame: computed<Frame>(() => {
        const buttons: Writable<Buttons> = filteredItems.value
          .slice(
            page.value * pageSize.value,
            page.value * pageSize.value + pageSize.value
          )
          .map(item => {
            assert.not.empty(mdi.value);

            const icon = mdi.value[item.id];

            return {
              icon,
              padding: false,
              selected: icon === props.modelValue,
              tooltip: settings.value.iconTooltips
                ? item.description
                : undefined
            };
          });

        while (buttons.length < pageSize.value)
          buttons.push({ padding: true, selected: false });

        return _.chunk(buttons, props.cols);
      }),
      from,
      icon: computed<string>(() => props.modelValue ?? props.placeholder),
      icons,
      lang,
      loading: computed<boolean>(() => is.empty(mdi.value)),
      nextClick(): void {
        page.value++;
      },
      nextDisable: computed<boolean>(() => to.value >= total.value),
      notFound: computed<boolean>(() => total.value === 0),
      notSelected: computed<boolean>(() => is.empty(props.modelValue)),
      open(): void {
        const index = is.not.empty(props.modelValue)
          ? filteredItems.value.findIndex(item => {
              assert.not.empty(mdi.value);

              return mdi.value[item.id] === props.modelValue;
            })
          : -1;

        page.value = index === -1 ? 0 : Math.floor(index / pageSize.value);

        show.value = true;

        handlePromise.silent(async (): Promise<void> => {
          await testDelay();
          mdi.value = await import(
            /* webpackChunkName: "mdi" */
            "@mdi/js-dynamic"
          );
        });
      },
      pickIcon(icon: unknown): void {
        assert.string(icon);
        emit(
          "update:model-value",
          icon === props.modelValue ? undefined : icon
        );
        show.value = false;
      },
      prevClick(): void {
        page.value--;
      },
      prevDisable: computed<boolean>(() => from.value <= 1),
      searchString,
      show,
      to,
      total
    };
  }
});
</script>

<template>
  <m-icon-button
    :class="{
      'text-grey-5': notSelected
    }"
    :icon="icon"
    @click="open"
  >
    <q-dialog v-model="show">
      <m-card :title="lang.IconPicker" transparent-header>
        <m-card-section>
          <m-input v-model="searchString" class="q-pb-md search" />
          <div class="relative-position">
            <div
              v-if="loading"
              class="absolute fit flex items-center justify-center loading"
            >
              <q-spinner color="primary" :size="spinnerSize" />
            </div>
            <div v-for="(row, i) in frame" :key="i">
              <m-icon-button
                v-for="(button, j) in row"
                :key="j"
                class="pick-icon"
                :class="{
                  'bg-primary text-white': button.selected,
                  'invisible': button.padding
                }"
                :disable="button.padding"
                :icon="button.icon"
                :tooltip="button.tooltip"
                @click="pickIcon(button.icon)"
              />
            </div>
          </div>
        </m-card-section>
        <m-card-actions>
          <m-icon-button
            class="prev"
            :disable="prevDisable"
            :icon="icons.chevronLeft"
            @click="prevClick"
          />
          <q-space />
          <span
            class="pagination"
            :class="{
              invisible: loading || notFound
            }"
          >
            {{ from }} &ndash; {{ to }} {{ lang.of }} {{ total }}
          </span>
          <q-space />
          <m-icon-button
            class="next"
            :disable="nextDisable"
            :icon="icons.chevronRight"
            @click="nextClick"
          />
        </m-card-actions>
      </m-card>
    </q-dialog>
  </m-icon-button>
</template>
