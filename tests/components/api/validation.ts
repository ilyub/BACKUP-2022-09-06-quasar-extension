import { plugins } from "@";
import * as testUtils from "@/test-utils";
import { handlePromise, lang } from "@skylib/facades";
import { as, cast, fn, is, o, wait } from "@skylib/functions";
import * as functionsTestUtils from "@skylib/functions/dist/test-utils";
import * as vueTestUtils from "@vue/test-utils";
import { QField } from "quasar";
import { computed, nextTick, ref } from "vue";
import type { numberU } from "@skylib/functions";

functionsTestUtils.installFakeTimer();

const rules = [
  (value: unknown): lang.Key | true =>
    is.not.empty(value) ? true : lang.keys.Invalid
];

test.each([
  {
    event: "change-2",
    expected: false,
    min: 3
  },
  {
    event: "change-2",
    expected: false,
    label: lang.keys.Field,
    min: 3,
    minErrorMessage: lang.keys.FieldShouldBeGteMin,
    minMaxFormat: cast.string
  },
  {
    event: "change-2",
    expected: false,
    max: 1
  },
  {
    event: "change2",
    expected: false,
    label: lang.keys.Field,
    max: 1,
    maxErrorMessage: lang.keys.FieldShouldBeLteMax,
    minMaxFormat: cast.string
  },
  {
    event: "change-undefined",
    expected: true,
    min: 3
  },
  {
    event: "change-undefined",
    expected: true,
    max: 3
  },
  {
    event: "change-undefined",
    expected: false,
    rulesOnChange: rules
  },
  {
    event: "input-undefined",
    expected: false,
    rulesOnInput: rules
  },
  {
    event: "submit-2",
    expected: true,
    required: true,
    requiredErrorMessage: lang.keys.FieldIsRequired
  },
  {
    event: "submit-undefined",
    expected: false,
    required: true
  },
  {
    event: "submit-undefined",
    expected: false,
    required: true
  },
  {
    event: "submit-undefined",
    expected: false,
    rulesOnSubmit: rules
  }
])(
  "validation",
  async ({
    event,
    expected,
    label,
    max,
    maxErrorMessage,
    min,
    minErrorMessage,
    minMaxFormat,
    required,
    requiredErrorMessage,
    rulesOnChange,
    rulesOnInput,
    rulesOnSubmit
  }) => {
    expect.hasAssertions();

    await functionsTestUtils.run(async () => {
      const callback = jest.fn();

      const wrapper = vueTestUtils.mount({
        global: testUtils.globalMountOptions(),
        setup: () => {
          const field = ref<QField>();

          const validation = plugins.validation(
            {
              rulesOnChange,
              rulesOnInput,
              rulesOnSubmit
            },
            computed(() => as.not.empty(field.value)),
            computed(() =>
              o.removeUndefinedKeys({
                format: fn.identity,
                label,
                max,
                maxErrorMessage,
                min,
                minErrorMessage,
                minMaxFormat,
                required,
                requiredErrorMessage
              })
            )
          );

          return {
            field,
            rules: validation.rules,
            validate: (value: numberU, context: plugins.validation.Context) => {
              handlePromise.silent(async () => {
                callback(await validation.validateAsync(value, context));
              });
            },
            validation
          };
        },
        template: `
          <q-field
            ref="field"
            :rules="rules"
            @change-2="validate(2, 'change')"
            @change-undefined="validate(undefined, 'change')"
            @input-2="validate(2, 'input')"
            @input-undefined="validate(undefined, 'input')"
            @submit-2="validate(2, 'submit')"
            @submit-undefined="validate(undefined, 'submit')"

          />
        `
      });

      const main = testUtils.findQuasarComponent(wrapper, QField);

      await nextTick();
      main.vm.$emit(event);
      await wait(1000);
      expect(callback).toHaveBeenCalledOnce();
      expect(callback).toHaveBeenCalledWith(expected);
    });
  }
);
