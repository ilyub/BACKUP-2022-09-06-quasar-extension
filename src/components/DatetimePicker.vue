<script lang="ts">
import type { QField } from "quasar";
import { computed, defineComponent, ref } from "vue";

import { compare } from "@skylib/facades/es/compare";
import type { DateTime } from "@skylib/facades/es/datetime";
import { datetime } from "@skylib/facades/es/datetime";
import * as assert from "@skylib/functions/es/assertions";
import * as is from "@skylib/functions/es/guards";
import type { stringU } from "@skylib/functions/es/types/core";

import {
  propOptions,
  propsToPropDefinitions,
  validateEmit,
  validateProps
} from "./api";
import { useSlotsNames } from "./api/slotNames";
import type {
  DatetimePickerOwnProps,
  DatetimePickerParentProps,
  DatetimePickerSlots
} from "./DatetimePicker.extras";
import { icons, lang } from "./DatetimePicker.extras";

interface Time {
  readonly hours: number;
  readonly minutes: number;
}

export default defineComponent({
  name: "m-datetime-picker",
  props: {
    ...propsToPropDefinitions<DatetimePickerParentProps>(),
    max: propOptions(is.stringU),
    min: propOptions(is.stringU),
    modelValue: propOptions(is.stringU)
  },
  emits: {
    "update:modelValue": (value: stringU) => is.stringU(value)
  },
  setup(props, { emit }) {
    validateEmit<DatetimePickerOwnProps>(emit);
    validateProps<DatetimePickerOwnProps>(props);

    const dialogShow = ref(false);

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

    const pickerEmpty = computed<boolean>(() => is.empty(pickerValue.value));

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
        if (is.string(value)) pickerValue.value = value;

        if (is.not.empty(pickerValue.value)) nextStep.value = true;
      },
      dialogShow,
      icons,
      inputModelValue: computed<stringU>(() =>
        modelDt()?.format("E, d MMM yyyy HHH:mm A")
      ),
      inputUpdateModelValue(value: unknown): void {
        if (is.empty(value)) emit("update:modelValue", undefined);
      },
      lang,
      main: ref<QField | undefined>(undefined),
      nextClick(): void {
        nextStep.value = true;
      },
      nextStep,
      pickDate(): void {
        dialogShow.value = true;
        nextStep.value = false;
        pickerValue.value = modelDt()?.toString();
      },
      pickSmart(): void {
        dialogShow.value = true;
        nextStep.value = is.not.empty(props.modelValue);
        pickerValue.value = modelDt()?.toString();
      },
      pickTime(): void {
        dialogShow.value = true;
        nextStep.value = true;
        pickerValue.value = modelDt()?.toString();
      },
      pickerEmpty,
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
        emit("update:modelValue", pickerDt()?.toString());
      },
      slotNames: useSlotsNames<DatetimePickerSlots>()(
        "append",
        "control",
        "prepend"
      ),
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
      timeValueUpdate(value: string | null): void {
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
    class="m-datetime-picker"
    dense
    :model-value="inputModelValue"
    @update:model-value="inputUpdateModelValue"
  >
    <template v-for="slotName in slotNames.passThroughSlots" #[slotName]="data">
      <slot :name="slotName" v-bind="data ?? {}"></slot>
    </template>
    <template #append>
      <slot :name="slotNames.append">
        <q-icon
          class="cursor-pointer ref-datetime-picker-show-time"
          :name="icons.pickTime"
          @click="pickTime"
        />
      </slot>
    </template>
    <template #control>
      <slot :name="slotNames.control">
        <div
          class="cursor-pointer fit items-center ref-datetime-picker-control row"
          @click="pickSmart"
        >
          {{ inputModelValue }}
        </div>
        <q-dialog
          v-model="dialogShow"
          anchor="bottom left"
          :offset="[0, 10]"
          self="top left"
        >
          <m-card>
            <template #title>
              <div class="items-end row">
                <div
                  class="ref-datetime-picker-prev"
                  :class="{
                    [`${$style.headerClickable} text-blue-2`]: nextStep
                  }"
                  @click="prevClick"
                >
                  <div
                    :class="`${$style.headerText} q-mb-xs text-body2 text-weight-thin`"
                  >
                    {{ year }}
                  </div>
                  <div :class="`${$style.headerText} text-subtitle1`">
                    {{ date }}
                  </div>
                </div>
                <div
                  class="q-ml-sm ref-datetime-picker-next"
                  :class="{
                    [`${$style.headerClickable} text-blue-2`]: !nextStep
                  }"
                  @click="nextClick"
                >
                  <div :class="`${$style.headerText} text-subtitle1`">
                    {{ time }}
                  </div>
                </div>
              </div>
            </template>
            <template #header-actions>
              <m-icon-button
                class="ref-datetime-picker-pm"
                :disable="pickerEmpty"
                :icon="pm ? icons.am : icons.pm"
                @click="pmToggle"
              />
            </template>
            <m-card-section>
              <q-time
                v-if="nextStep"
                class="m-datetime-picker__time ref-datetime-picker-time"
                flat
                mask="YYYY-MM-DD HH:mm"
                :model-value="pickerValue"
                :options="timeOptions"
                @update:model-value="timeValueUpdate"
              >
                <div
                  :class="`${$style.footerActions} items-center justify-end row`"
                >
                  <m-form-button
                    v-close-popup
                    class="ref-datetime-picker-time-save"
                    color="primary"
                    :disable="pickerEmpty"
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
                :options="dateOptions"
                @update:model-value="dateValueUpdate"
              >
                <div
                  :class="`${$style.footerActions} items-center justify-end row`"
                >
                  <m-form-button
                    v-close-popup
                    class="ref-datetime-picker-date-save"
                    color="primary"
                    :disable="pickerEmpty"
                    :label="lang.Save"
                    @click="save"
                  />
                </div>
              </q-date>
            </m-card-section>
          </m-card>
        </q-dialog>
      </slot>
    </template>
    <template #prepend>
      <slot :name="slotNames.prepend">
        <q-icon
          class="cursor-pointer ref-datetime-picker-show-date"
          :name="icons.pickDate"
          @click="pickDate"
        />
      </slot>
    </template>
  </q-field>
</template>

<style lang="scss" module>
.footerActions {
  margin-right: -10px;
}

.headerClickable {
  cursor: pointer;

  &:hover {
    color: white;
  }
}

.headerText {
  line-height: 1em;
  user-select: none;
}
</style>
