<script lang="ts">
import { DatetimePicker } from "./DatetimePicker.extras";
import {
  directives,
  prop,
  parentProps,
  validateEmit,
  validateProps,
  plugins,
  skipCheck
} from "./api";
import { compare, datetime } from "@skylib/facades";
import { as, is, o } from "@skylib/functions";
import { computed, defineComponent, ref } from "vue";
import type { stringU } from "@skylib/functions";
import type { QField } from "quasar";

export default defineComponent({
  name: "m-datetime-picker",
  directives: { debugId: directives.debugId("datetime-picker") },
  props: {
    ...parentProps<DatetimePicker.ParentProps>(),
    ...plugins.useValidation.props,
    label: prop<DatetimePicker.Props["label"]>(),
    max: prop<DatetimePicker.Props["max"]>(),
    min: prop<DatetimePicker.Props["min"]>(),
    modelValue: prop<DatetimePicker.Props["modelValue"]>(),
    required: prop.boolean()
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit }) => {
    validateEmit<DatetimePicker.OwnProps>(emit);
    validateProps<DatetimePicker.OwnProps>(props);

    const dialogShow = ref(false);

    const minDate = computed(() =>
      is.not.empty(props.min)
        ? datetime.create(props.min).format("yyyy/MM/dd")
        : undefined
    );

    const maxDate = computed(() =>
      is.not.empty(props.max)
        ? datetime.create(props.max).format("yyyy/MM/dd")
        : undefined
    );

    const minTime = computed(() => {
      if (
        is.not.empty(props.min) &&
        is.not.empty(minDate.value) &&
        is.not.empty(pickerDate.value) &&
        pickerDate.value === minDate.value
      ) {
        const date = datetime.create(props.min);

        return { hours: date.hours(), minutes: date.minutes() };
      }

      return undefined;
    });

    const maxTime = computed(() => {
      if (
        is.not.empty(props.max) &&
        is.not.empty(maxDate.value) &&
        is.not.empty(pickerDate.value) &&
        pickerDate.value === maxDate.value
      ) {
        const date = datetime.create(props.max);

        return { hours: date.hours(), minutes: date.minutes() };
      }

      return undefined;
    });

    // eslint-disable-next-line no-warning-comments -- Use "ReadonlyDateTime" type
    // fixme
    const modelObject = computed(() =>
      is.not.empty(props.modelValue) && datetime.validate(props.modelValue)
        ? datetime.create(props.modelValue)
        : undefined
    );

    const pickerDate = computed(() => pickerObject.value?.format("yyyy/MM/dd"));

    const pickerValue = ref<string>();

    // eslint-disable-next-line no-warning-comments -- Use "ReadonlyDateTime" type
    // fixme
    const pickerObject = computed(() =>
      is.not.empty(pickerValue.value)
        ? datetime.create(pickerValue.value)
        : undefined
    );

    const step = ref<"date" | "time">("date");

    const main = ref<QField>();

    const validation = plugins.useValidation(
      props,
      main,
      () => props.modelValue,
      () =>
        o.removeUndefinedKeys({
          label: props.label,
          max: props.max,
          min: props.min,
          required: props.required
        })
    );

    return {
      blur: validation.change,
      date: computed(() =>
        pickerObject.value ? pickerObject.value.format("E, d MMM") : "\u2014"
      ),
      dateOptions: (date: string): boolean => {
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
      dateUpdate: (value: unknown): void => {
        if (is.string(value)) pickerValue.value = value;

        if (is.not.empty(pickerValue.value)) step.value = "time";
      },
      dialogShow,
      fieldClick: (): void => {
        dialogShow.value = true;
        step.value = is.not.empty(props.modelValue) ? "time" : "date";
        pickerValue.value = modelObject.value?.toString();
      },
      fieldLabel: computed(() =>
        is.not.empty(props.label) && DatetimePicker.lang.has(props.label)
          ? DatetimePicker.lang.get(props.label)
          : props.label
      ),
      fieldUpdate: (value: unknown): void => {
        if (is.empty(value)) emitValue(undefined);
      },
      fieldValue: computed(() =>
        modelObject.value?.format("E, d MMM yyyy HHH:mm A")
      ),
      icons: DatetimePicker.icons,
      lang: DatetimePicker.lang,
      main,
      nextClick: (): void => {
        step.value = "time";
      },
      pickDate: (): void => {
        dialogShow.value = true;
        step.value = "date";
        pickerValue.value = modelObject.value?.toString();
      },
      pickTime: (): void => {
        dialogShow.value = true;
        step.value = "time";
        pickerValue.value = modelObject.value?.toString();
      },
      pickerEmpty: computed(() => is.empty(pickerValue.value)),
      pickerValue,
      pm: computed(() =>
        pickerObject.value ? pickerObject.value.hours() >= 12 : false
      ),
      pmToggle: (): void => {
        const date = datetime.create(as.not.empty(pickerValue.value));

        pickerValue.value = date.setHours((date.hours() + 12) % 24).toString();
      },
      prevClick: (): void => {
        step.value = "date";
      },
      rules: validation.rules,
      save: (): void => {
        emitValue(pickerObject.value?.toString());
      },
      slotNames: plugins.useSlotNames<DatetimePicker.Slots>()(
        "append",
        "control",
        "label",
        "prepend"
      ),
      step,
      time: computed(() =>
        pickerObject.value ? pickerObject.value.format("HHH:mm A") : "\u2014"
      ),
      timeOptions: (hours: number, minutes: number | null): boolean => {
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
      timeUpdate: (value: string | null): void => {
        pickerValue.value = as.not.empty(value);
      },
      year: computed(() =>
        pickerObject.value ? pickerObject.value.format("yyyy") : "\u2013"
      )
    };

    function emitValue(value: stringU): void {
      emit("update:modelValue", value);
      validation.change();
    }
  }
});
</script>

<template>
  <q-field
    ref="main"
    class="m-datetime-picker"
    dense
    hide-bottom-space
    :label="fieldLabel"
    :model-value="fieldValue"
    :rules="rules"
    @blur="blur"
    @update:model-value="fieldUpdate"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot :name="slotNames.control" v-bind="data ?? {}">
        <input
          v-debug-id="'control'"
          class="m-datetime-picker__input"
          readonly
          :value="data.modelValue"
          @click="fieldClick"
        />
        <q-dialog v-model="dialogShow">
          <m-card v-debug-id="'dialog'" class="m-datetime-picker__dialog">
            <template #title>
              <div class="items-end row">
                <div
                  v-debug-id="'prev'"
                  :class="{
                    'm-datetime-picker__header-clickable': step === 'time'
                  }"
                  @click="prevClick"
                >
                  <div class="m-datetime-picker__header-overline">
                    {{ year }}
                  </div>
                  <div class="m-datetime-picker__header-text">
                    {{ date }}
                  </div>
                </div>
                <div
                  v-debug-id="'next'"
                  class="q-ml-sm"
                  :class="{
                    'm-datetime-picker__header-clickable': step === 'date'
                  }"
                  @click="nextClick"
                >
                  <div class="m-datetime-picker__header-text">
                    {{ time }}
                  </div>
                </div>
              </div>
            </template>
            <template #header-actions>
              <m-icon-button
                v-debug-id="'pm'"
                :disable="pickerEmpty"
                :icon="pm ? icons.am : icons.pm"
                @click="pmToggle"
              />
            </template>
            <template #default>
              <m-card-section>
                <q-date
                  v-if="step === 'date'"
                  v-debug-id="'date'"
                  flat
                  mask="YYYY-MM-DD HH:mm"
                  minimal
                  :model-value="pickerValue"
                  :options="dateOptions"
                  @update:model-value="dateUpdate"
                >
                  <div class="m-datetime-picker__footer-actions">
                    <m-form-button
                      v-close-popup
                      v-debug-id="'date-save'"
                      color="primary"
                      :disable="pickerEmpty"
                      :label="lang.Save"
                      @click="save"
                    />
                  </div>
                </q-date>
                <q-time
                  v-if="step === 'time'"
                  v-debug-id="'time'"
                  class="m-datetime-picker__time"
                  flat
                  mask="YYYY-MM-DD HH:mm"
                  :model-value="pickerValue"
                  :options="timeOptions"
                  @update:model-value="timeUpdate"
                >
                  <div class="m-datetime-picker__footer-actions">
                    <m-form-button
                      v-close-popup
                      v-debug-id="'time-save'"
                      color="primary"
                      :disable="pickerEmpty"
                      :label="lang.Save"
                      @click="save"
                    />
                  </div>
                </q-time>
              </m-card-section>
            </template>
          </m-card>
        </q-dialog>
      </slot>
    </template>
    <template #label="data">
      <slot :name="slotNames.label" v-bind="data ?? {}">
        {{ fieldLabel }}
        <span v-if="required" class="m-datetime-picker__required">*</span>
      </slot>
    </template>
    <template #prepend="data">
      <slot :name="slotNames.prepend" v-bind="data ?? {}">
        <q-icon
          v-debug-id="'show-date'"
          class="cursor-pointer"
          :name="icons.pickDate"
          @click="pickDate"
        />
      </slot>
    </template>
    <template #append="data">
      <slot :name="slotNames.append" v-bind="data ?? {}">
        <q-icon
          v-debug-id="'show-time'"
          class="cursor-pointer"
          :name="icons.pickTime"
          @click="pickTime"
        />
      </slot>
    </template>
  </q-field>
</template>
