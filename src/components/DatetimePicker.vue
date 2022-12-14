<script lang="ts">
import { as, cast, is } from "@skylib/functions";
import { compare, datetime } from "@skylib/facades";
import { computed, defineComponent, ref } from "vue";
import {
  directives,
  parentProps,
  plugins,
  propFactory,
  skipCheck,
  validateEmit,
  validateProps
} from "./api";
import { DatetimePicker } from "./DatetimePicker.extras";
import type { Exposed } from "./api";
import type { Field } from "./Field.extras";
import { genericField } from "./Field.generic";
import type { stringU } from "@skylib/functions";

enum Step {
  date = "date",
  time = "time"
}

const prop = propFactory<DatetimePicker.OwnProps>();

interface TimeLimit {
  readonly hours: number;
  readonly minutes: number;
}

export default defineComponent({
  name: "m-datetime-picker",
  components: { "m-field__string": genericField<stringU>() },
  directives: { debugId: directives.debugId("datetime-picker") },
  props: {
    ...parentProps<DatetimePicker.ParentProps>(),
    max: prop("max"),
    min: prop("min"),
    modelValue: prop("modelValue")
  },
  emits: { "update:modelValue": (value: stringU) => skipCheck(value) },
  setup: (props, { emit, expose }) => {
    const { icons, lang } = DatetimePicker;

    const lk = lang.keys;

    const main = ref<Field.Global<stringU>>();

    const showDialog = ref(false);

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

    const minTime = computed((): TimeLimit | undefined => {
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

    const maxTime = computed((): TimeLimit | undefined => {
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

    const modelObject = computed(() =>
      is.not.empty(props.modelValue) && datetime.validate(props.modelValue)
        ? datetime.create(props.modelValue)
        : undefined
    );

    const pickerDate = computed(() => pickerObject.value?.format("yyyy/MM/dd"));

    const pickerValue = ref<string>();

    const pickerObject = computed(() =>
      is.not.empty(pickerValue.value)
        ? datetime.create(pickerValue.value)
        : undefined
    );

    const step = ref(Step.date);

    const exposed: Exposed<DatetimePicker.Global> = {
      dateOptions,
      main,
      timeOptions
    };

    validateEmit<DatetimePicker.OwnProps>(emit);
    validateProps<DatetimePicker.OwnProps>(props);
    expose(exposed);

    return {
      date: computed(() =>
        pickerObject.value ? pickerObject.value.format("E, d MMM") : "\u2014"
      ),
      dateOptions,
      dateUpdate: (value: unknown): void => {
        if (is.string(value)) pickerValue.value = value;

        if (is.not.empty(pickerValue.value)) step.value = Step.time;
      },
      format: cast.stringU,
      icons,
      inputClick: (): void => {
        showDialog.value = true;
        step.value = is.not.empty(props.modelValue) ? Step.time : Step.date;
        pickerValue.value = modelObject.value?.toString();
      },
      inputValue: computed(() =>
        modelObject.value?.format("E, d MMM yyyy HHH:mm A")
      ),
      lk,
      main,
      nextClick: (): void => {
        step.value = Step.time;
      },
      pickDate: (): void => {
        showDialog.value = true;
        step.value = Step.date;
        pickerValue.value = modelObject.value?.toString();
      },
      pickTime: (): void => {
        showDialog.value = true;
        step.value = Step.time;
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
        step.value = Step.date;
      },
      save: (
        emitValue: Parameters<DatetimePicker.Slots["control"]>[0]["emitValue"]
      ): void => {
        emitValue(pickerObject.value?.toString());
      },
      showDialog,
      slotNames: plugins.slotNames<DatetimePicker.Slots>()(
        "append",
        "control",
        "prepend"
      ),
      step,
      time: computed(() =>
        pickerObject.value ? pickerObject.value.format("HHH:mm A") : "\u2014"
      ),
      timeOptions,
      timeUpdate: (value: string | null): void => {
        pickerValue.value = as.not.empty(value);
      },
      year: computed(() =>
        pickerObject.value ? pickerObject.value.format("yyyy") : "\u2013"
      )
    };

    function dateOptions(date: string): boolean {
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
    }

    function timeOptions(hours: number, minutes: number | null): boolean {
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
    }
  }
});
</script>

<template>
  <m-field__string
    ref="main"
    class="m-datetime-picker"
    :format="format"
    :model-value="modelValue"
    :stack-label="showDialog"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template v-for="name in slotNames.passThroughSlots" #[name]="data">
      <slot :name="name" v-bind="data ?? {}"></slot>
    </template>
    <template #control="data">
      <slot :name="slotNames.control" v-bind="data ?? {}">
        <input class="hidden" readonly :value="data.modelValue" />
        <input
          v-debug-id="'control'"
          class="m-datetime-picker__input q-field__input"
          :placeholder="data.placeholder ?? ''"
          readonly
          :value="inputValue"
          @click="inputClick"
        />
        <q-dialog v-model="showDialog">
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
                      :label="lk.Save"
                      @click="save(data.emitValue)"
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
                      :label="lk.Save"
                      @click="save(data.emitValue)"
                    />
                  </div>
                </q-time>
              </m-card-section>
            </template>
          </m-card>
        </q-dialog>
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
  </m-field__string>
</template>
