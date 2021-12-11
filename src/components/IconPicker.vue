<script lang="ts">
import * as _ from "lodash-es";
import { computed, defineComponent, ref, watch } from "vue";

import { handlePromise } from "@skylib/facades/es/handlePromise";
import { testDelay } from "@skylib/facades/es/testDelay";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import * as o from "@skylib/functions/es/object";
import type { Writable } from "@skylib/functions/es/types/core";

import { propOptions } from "./api";
import { icons, lang } from "./IconPicker.extras";

interface Button {
  readonly icon?: unknown;
  readonly padding: boolean;
  readonly selected: boolean;
}

type Buttons = readonly Button[];

type Frame = readonly Buttons[];

interface Item {
  readonly id: keyof Mdi;
  readonly searchable: string;
}

type Items = readonly Item[];

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Mdi = typeof import("@mdi/js-dynamic");

// eslint-disable-next-line @skylib/prefer-readonly
const mdi = ref<Mdi | undefined>(undefined);

export default defineComponent({
  name: "x-icon-picker",
  props: {
    cols: propOptions.default(is.number, 7),
    modelValue: propOptions(is.string),
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
    const filteredItems = computed<Items>(() => {
      const searchable = searchString.value.length
        ? `-${_.kebabCase(searchString.value)}-`
        : "";

      return searchString.value.length
        ? items.value.filter(item => item.searchable.includes(searchable))
        : items.value;
    });

    const from = computed<number>(() => page.value * pageSize.value + 1);

    const items = computed<Items>(() =>
      mdi.value
        ? o
            .keys(mdi.value)
            .filter(id => id.startsWith("mdi"))
            .map(id => {
              return {
                id,
                searchable: `-${_.kebabCase(id)}-`
              };
            })
        : []
    );

    const page = ref(0);

    const pageSize = computed<number>(() => props.cols * props.rows);

    const searchString = ref("");

    const show = ref(false);

    const to = computed<number>(() =>
      Math.min(page.value * pageSize.value + pageSize.value, total.value)
    );

    const total = computed<number>(() => filteredItems.value.length);

    watch(searchString, () => {
      page.value = 0;
    });

    return {
      close(): void {
        show.value = false;
      },
      empty: computed<boolean>(() => is.empty(props.modelValue)),
      frame: computed<Frame>(() => {
        const buttons: Writable<Buttons> = filteredItems.value
          .slice(
            page.value * pageSize.value,
            page.value * pageSize.value + pageSize.value
          )
          .map(item => {
            assert.not.empty(mdi.value);

            const id = item.id;

            const icon = mdi.value[id];

            return {
              icon,
              padding: false,
              selected: icon === props.modelValue
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
      show,
      to,
      total
    };
  }
});
</script>

<template>
  <x-nav-button
    :class="{
      'text-grey-5': empty
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
            <x-nav-button :icon="icons.close" @click="close" />
          </div>
          <x-input v-model="searchString" class="q-pb-md" />
          <div class="relative-position">
            <div
              v-if="loading"
              class="absolute fit flex items-center justify-center"
            >
              <q-spinner color="primary" :size="spinnerSize" />
            </div>
            <div v-for="(row, i) in frame" :key="i">
              <x-nav-button
                v-for="(button, j) in row"
                :key="j"
                :class="{
                  'text-white': button.selected,
                  'bg-primary': button.selected,
                  'invisible': button.padding
                }"
                :disable="button.padding"
                :icon="button.icon"
                @click="pickIcon(button.icon)"
              />
            </div>
          </div>
        </q-card-section>
        <q-card-actions>
          <x-nav-button
            :disable="prevDisable"
            :icon="icons.chevronLeft"
            @click="prevClick"
          />
          <q-space />
          <span
            :class="{
              invisible: loading
            }"
          >
            {{ from }} &ndash; {{ to }} {{ lang.of }} {{ total }}
          </span>
          <q-space />
          <x-nav-button
            :disable="nextDisable"
            :icon="icons.chevronRight"
            @click="nextClick"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </x-nav-button>
</template>