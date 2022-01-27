<script lang="ts">
import * as _ from "lodash-es";
import { computed, defineComponent, inject, ref, watch } from "vue";

import { handlePromise } from "@skylib/facades/es/handlePromise";
import type { Engine as InlineSearchEngine } from "@skylib/facades/es/inlineSearch";
import { inlineSearch } from "@skylib/facades/es/inlineSearch";
import { testDelay } from "@skylib/facades/es/testDelay";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { stringU, Writable } from "@skylib/functions/es/types/core";

import { propOptions } from "./api";
import type { IconPickerSettings } from "./IconPicker.extras";
import {
  defaultIconPickerSettings,
  icons,
  injectIconPickerSettings,
  lang
} from "./IconPicker.extras";
import Input from "./Input.vue";
import NavButton from "./NavButton.vue";

interface Button {
  readonly icon?: unknown;
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
  name: "s-icon-picker",
  components: {
    "s-input": Input,
    "s-nav-button": NavButton
  },
  props: {
    cols: propOptions.default(is.number, 7),
    modelValue: propOptions(is.stringU),
    placeholder: propOptions.required(is.string),
    rows: propOptions.default(is.number, 5),
    spinnerSize: propOptions.default(is.string, "70px")
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.stringU(value);
    }
  },
  setup(props, { emit }) {
    const filteredItems = computed<Items>(() =>
      is.not.empty(searchString.value)
        ? searchIndex.value.search(searchString.value)
        : items.value
    );

    const from = computed<number>(() => page.value * pageSize.value + 1);

    const searchIndex = computed<InlineSearchEngine<Item>>(() =>
      inlineSearch.create("id", ["description"], items.value)
    );

    const settings = inject(
      injectIconPickerSettings,
      computed<IconPickerSettings>(defaultIconPickerSettings)
    );

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
      page,
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
      settings,
      show,
      to,
      total
    };
  }
});
</script>

<template>
  <s-nav-button
    :class="{
      'text-grey-5': notSelected
    }"
    :icon="icon"
    @click="open"
  >
    <q-dialog v-model="show">
      <q-card>
        <q-card-section>
          <div class="flex text-h6">
            {{ lang.IconPicker }}
            <q-space />
            <s-nav-button v-close-popup class="close" :icon="icons.close" />
          </div>
          <s-input v-model="searchString" class="q-pb-md search" />
          <div class="relative-position">
            <div
              v-if="loading"
              class="absolute fit flex items-center justify-center loading"
            >
              <q-spinner color="primary" :size="spinnerSize" />
            </div>
            <div v-for="(row, i) in frame" :key="i">
              <s-nav-button
                v-for="(button, j) in row"
                :key="j"
                :class="{
                  'text-white': button.selected,
                  'bg-primary': button.selected,
                  'invisible': button.padding,
                  'pick-icon': true
                }"
                :disable="button.padding"
                :icon="button.icon"
                :tooltip="button.tooltip"
                @click="pickIcon(button.icon)"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-actions>
          <s-nav-button
            class="prev"
            :disable="prevDisable"
            :icon="icons.chevronLeft"
            @click="prevClick"
          />
          <q-space />
          <span
            :class="{
              invisible: loading || notFound,
              pagination: true
            }"
          >
            {{ from }} &ndash; {{ to }} {{ lang.of }} {{ total }}
          </span>
          <q-space />
          <s-nav-button
            class="next"
            :disable="nextDisable"
            :icon="icons.chevronRight"
            @click="nextClick"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </s-nav-button>
</template>
