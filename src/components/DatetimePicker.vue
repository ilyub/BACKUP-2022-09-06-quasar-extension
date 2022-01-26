<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import type { DateTime } from "@skylib/facades/es/datetime";
import { datetime } from "@skylib/facades/es/datetime";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";

import { propOptions } from "./api";
import { icons, lang } from "./DatetimePicker.extras";

export default defineComponent({
  name: "s-datetime-picker",
  props: {
    modelValue: propOptions(is.stringU)
  },
  emits: {
    "update:model-value"(value: unknown) {
      return is.stringU(value);
    }
  },
  setup(props, { emit }) {
    const empty = computed<boolean>(() => is.empty(pickerValue.value));

    const nextStep = ref(false);

    const pickerValue = ref<stringU>(undefined);

    const pm = ref(false);

    function modelDate(): DateTime | undefined {
      return is.not.empty(props.modelValue) &&
        datetime.validate(props.modelValue)
        ? datetime.create(props.modelValue)
        : undefined;
    }

    function pickerDate(): DateTime | undefined {
      return is.not.empty(pickerValue.value)
        ? datetime.create(pickerValue.value).add(pm.value ? 12 : 0, "hours")
        : undefined;
    }

    return {
      date: computed<string>(
        () => pickerDate()?.format("E, d MMM") ?? "\u2014"
      ),
      dateValueUpdate(value: unknown): void {
        assert.string(value);
        pickerValue.value = value;
        nextStep.value = true;
      },
      empty,
      icons,
      inputValue: computed<stringU>(() =>
        modelDate()?.format("E, d MMM yyyy HHH:mm A")
      ),
      inputValueUpdate(value: unknown): void {
        if (is.empty(value)) emit("update:model-value", undefined);
      },
      lang,
      main: ref(undefined),
      nextClick(): void {
        if (empty.value) {
          // Select date first
        } else nextStep.value = true;
      },
      nextStep,
      pickerValue,
      pm,
      pmToggle(): void {
        pm.value = !pm.value;
      },
      popupShow(): void {
        const date = modelDate();

        nextStep.value = false;
        pickerValue.value = undefined;
        pm.value = false;

        if (date) {
          if (date.hours() >= 12) {
            date.sub(12, "hours");
            pm.value = true;
          }

          pickerValue.value = date.toString();
        }
      },
      prevClick(): void {
        nextStep.value = false;
      },
      save(): void {
        emit("update:model-value", pickerDate()?.toString());
      },
      time: computed<string>(
        () => pickerDate()?.format("HHH:mm A") ?? "\u2014"
      ),
      timeValueUpdate(value: unknown): void {
        assert.string(value);
        pickerValue.value = value;
      },
      year: computed<string>(() => pickerDate()?.format("yyyy") ?? "\u2013")
    };
  }
});
</script>

<template>
  <s-input
    ref="main"
    :model-value="inputValue"
    readonly
    @update:model-value="inputValueUpdate"
  >
    <template #prepend>
      <q-icon
        class="cursor-pointer ref-datetime-picker-activator"
        :name="icons.pickDate"
      >
        <q-popup-proxy
          anchor="bottom left"
          :offset="[0, 10]"
          self="top left"
          @before-show="popupShow"
        >
          <q-card class="ref-datetime-picker-card">
            <q-card-section
              class="bg-primary items-center q-pr-sm row text-white"
            >
              <div class="items-end row">
                <div
                  :class="{
                    'header-clickable': nextStep,
                    'ref-datetime-picker-prev': true,
                    'text-blue-2': nextStep
                  }"
                  @click="prevClick"
                >
                  <div class="header-text q-mb-xs text-body2 text-weight-thin">
                    {{ year }}
                  </div>
                  <div class="header-text text-subtitle1">
                    {{ date }}
                  </div>
                </div>
                <div
                  :class="{
                    'header-clickable': !nextStep && !empty,
                    'ref-datetime-picker-next': true,
                    'text-blue-2': !nextStep,
                    'q-ml-sm': true
                  }"
                  @click="nextClick"
                >
                  <div class="header-text text-subtitle1">
                    {{ time }}
                  </div>
                </div>
              </div>
              <q-space />
              <div class="nav-button-group">
                <s-nav-button
                  class="ref-datetime-picker-pm"
                  :disable="empty"
                  :icon="pm ? icons.am : icons.pm"
                  @click="pmToggle"
                />
                <s-nav-button v-close-popup :icon="icons.close" />
              </div>
            </q-card-section>
            <q-card-section>
              <q-time
                v-if="nextStep"
                class="ref-datetime-picker-time"
                flat
                mask="YYYY-MM-DD HH:mm"
                :model-value="pickerValue"
                @update:model-value="timeValueUpdate"
              >
                <div class="footer-actions items-center justify-end row">
                  <q-btn
                    v-close-popup
                    class="ref-datetime-picker-time-save"
                    color="primary"
                    flat
                    :label="lang.Save"
                    @click="save"
                  />
                </div>
              </q-time>
              <q-date
                v-else
                class="ref-datetime-picker-date"
                flat
                mask="YYYY-MM-DD HH:mm"
                minimal
                :model-value="pickerValue"
                no-unset
                @update:model-value="dateValueUpdate"
              >
                <div class="footer-actions items-center justify-end row">
                  <q-btn
                    v-close-popup
                    class="ref-datetime-picker-date-save"
                    color="primary"
                    flat
                    :label="lang.Save"
                    @click="save"
                  />
                </div>
              </q-date>
            </q-card-section>
          </q-card>
        </q-popup-proxy>
      </q-icon>
    </template>
  </s-input>
</template>

<style lang="scss" scoped>
.footer-actions {
  margin-right: -10px;
}

.header-clickable {
  cursor: pointer;

  &:hover {
    color: white;
  }
}

.header-text {
  line-height: 1em;
  user-select: none;
}

:deep(.q-time__header) {
  display: none;
}
</style>
