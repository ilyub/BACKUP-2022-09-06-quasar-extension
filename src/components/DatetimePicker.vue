<script lang="ts">
import type { QField, QFieldProps } from "quasar";
import { computed, defineComponent, ref } from "vue";

import { compare } from "@skylib/facades/es/compare";
import type { DateTime } from "@skylib/facades/es/datetime";
import { datetime } from "@skylib/facades/es/datetime";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";

import type { PropsToPropOptions } from "./api";
import { propOptions } from "./api";
import Card from "./Card.vue";
import { icons, lang } from "./DatetimePicker.extras";
import IconButton from "./IconButton.vue";

interface Time {
  readonly hours: number;
  readonly minutes: number;
}

export default defineComponent({
  name: "x-datetime-picker",
  components: {
    "x-card": Card,
    "x-icon-button": IconButton
  },
  props: {
    ...({} as PropsToPropOptions<QFieldProps>),
    max: propOptions(is.stringU),
    min: propOptions(is.stringU),
    modelValue: propOptions(is.stringU)
  },
  emits: {
    "update:model-value": (value: stringU) => is.stringU(value)
  },
  // eslint-disable-next-line @skylib/prefer-readonly
  setup(props, { emit }) {
    const dialogShow = ref(false);

    const empty = computed<boolean>(() => is.empty(pickerValue.value));

    const minDate = computed<stringU>(() =>
      is.not.empty(props.min)
        ? datetime.create(props.min).format("yyyy/MM/dd")
        : undefined
    );

    const maxDate = computed<stringU>(() =>
      is.not.empty(props.max)
        ? datetime.create(props.max).format("yyyy/MM/dd")
        : undefined
    );

    const minTime = computed<Time | undefined>(() => {
      if (
        is.not.empty(props.min) &&
        is.not.empty(minDate.value) &&
        is.not.empty(pickerDate.value) &&
        pickerDate.value === minDate.value
      ) {
        const dt = datetime.create(props.min);

        return {
          hours: dt.hours(),
          minutes: dt.minutes()
        };
      }

      return undefined;
    });

    const maxTime = computed<Time | undefined>(() => {
      if (
        is.not.empty(props.max) &&
        is.not.empty(maxDate.value) &&
        is.not.empty(pickerDate.value) &&
        pickerDate.value === maxDate.value
      ) {
        const dt = datetime.create(props.max);

        return {
          hours: dt.hours(),
          minutes: dt.minutes()
        };
      }

      return undefined;
    });

    const nextStep = ref(false);

    const pickerDate = computed<stringU>(() =>
      is.not.empty(pickerValue.value)
        ? datetime.create(pickerValue.value).format("yyyy/MM/dd")
        : undefined
    );

    const pickerValue = ref<stringU>(undefined);

    const pm = computed<boolean>(() =>
      is.not.empty(pickerValue.value)
        ? datetime.create(pickerValue.value).hours() >= 12
        : false
    );

    function modelDt(): DateTime | undefined {
      return is.not.empty(props.modelValue) &&
        datetime.validate(props.modelValue)
        ? datetime.create(props.modelValue)
        : undefined;
    }

    function pickerDt(): DateTime | undefined {
      return is.not.empty(pickerValue.value)
        ? datetime.create(pickerValue.value)
        : undefined;
    }

    return {
      date: computed<string>(() => pickerDt()?.format("E, d MMM") ?? "\u2014"),
      dateOptions(date: string): boolean {
        if (
          is.not.empty(minDate.value) &&
          compare.strings(date, minDate.value) < 0
        )
          return false;

        if (
          is.not.empty(maxDate.value) &&
          compare.strings(date, maxDate.value) > 0
        )
          return false;

        return true;
      },
      dateValueUpdate(value: unknown): void {
        assert.string(value);
        pickerValue.value = value;
        nextStep.value = true;
      },
      dialogBeforeShow(): void {
        nextStep.value = false;
        pickerValue.value = modelDt()?.toString();
      },
      dialogShow,
      empty,
      icons,
      inputModelValue: computed<stringU>(() =>
        modelDt()?.format("E, d MMM yyyy HHH:mm A")
      ),
      inputUpdateModelValue(value: unknown): void {
        if (is.empty(value)) emit("update:model-value", undefined);
      },
      lang,
      main: ref<QField | undefined>(undefined),
      nextClick(): void {
        if (empty.value) {
          // Select date first
        } else nextStep.value = true;
      },
      nextStep,
      pickerValue,
      pm,
      pmToggle(): void {
        assert.not.empty(pickerValue.value);

        const dt = datetime.create(pickerValue.value);

        pickerValue.value = dt.setHours((dt.hours() + 12) % 24).toString();
      },
      prevClick(): void {
        nextStep.value = false;
      },
      save(): void {
        emit("update:model-value", pickerDt()?.toString());
      },
      time: computed<string>(() => pickerDt()?.format("HHH:mm A") ?? "\u2014"),
      timeOptions(hours: number, minutes: number | null): boolean {
        if (is.not.empty(minTime.value)) {
          if (hours < minTime.value.hours) return false;

          if (
            is.not.empty(minutes) &&
            hours === minTime.value.hours &&
            minutes < minTime.value.minutes
          )
            return false;
        }

        if (is.not.empty(maxTime.value)) {
          if (hours > maxTime.value.hours) return false;

          if (
            is.not.empty(minutes) &&
            hours === maxTime.value.hours &&
            minutes > maxTime.value.minutes
          )
            return false;
        }

        return true;
      },
      timeValueUpdate(value: unknown): void {
        assert.string(value);
        pickerValue.value = value;
      },
      year: computed<string>(() => pickerDt()?.format("yyyy") ?? "\u2013")
    };
  }
});
</script>

<template>
  <q-field
    ref="main"
    dense
    :model-value="inputModelValue"
    @update:model-value="inputUpdateModelValue"
  >
    <template #prepend>
      <q-icon
        class="cursor-pointer ref-datetime-picker-icon"
        :name="icons.pickDate"
        @click="dialogShow = true"
      />
    </template>
    <template #control>
      <div
        class="cursor-pointer full-width ref-datetime-picker-control"
        @click="dialogShow = true"
      >
        {{ inputModelValue }}
      </div>
      <q-dialog
        v-model="dialogShow"
        anchor="bottom left"
        :offset="[0, 10]"
        self="top left"
        @before-show="dialogBeforeShow"
      >
        <x-card>
          <template #title>
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
          </template>
          <template #header-actions>
            <x-icon-button
              class="ref-datetime-picker-pm"
              :disable="empty"
              :icon="pm ? icons.am : icons.pm"
              @click="pmToggle"
            />
          </template>
          <q-time
            v-if="nextStep"
            class="ref-datetime-picker-time"
            flat
            mask="YYYY-MM-DD HH:mm"
            :model-value="pickerValue"
            :options="timeOptions"
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
            :options="dateOptions"
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
        </x-card>
      </q-dialog>
    </template>
  </q-field>
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
