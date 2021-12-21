import type { ComputedRef } from "vue";
import * as vueTestUtils from "@vue/test-utils";

import * as assert from "@skylib/functions/es/assertions";
import * as reflect from "@skylib/functions/es/reflect";
import type { numberU } from "@skylib/functions/es/types/core";

import { injectPageOffset } from "@/components/api/injections";
import * as testUtils from "@/testUtils";

it.each([undefined, 1000])("globalMountOptions", pageOffset => {
  const provide = testUtils.globalMountOptions({ pageOffset }).provide;

  assert.not.empty(provide);

  const injected = reflect.get(
    provide,
    injectPageOffset as symbol
  ) as ComputedRef<numberU>;

  expect(injected.value).toStrictEqual(pageOffset);
});

it("htmlToEqual", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div>sample-text</div>
    `
  });

  {
    const result = testUtils.htmlToEqual(wrapper, "<div>sample-text</div>");

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      'Expected HTML code not to be "<div>sample-text</div>"'
    );
  }

  {
    const result = testUtils.htmlToEqual(wrapper, "<div>sample-text-2</div>");

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      'Expected HTML code to be "<div>sample-text-2</div>", got "<div>sample-text</div>"'
    );
  }
});

it("textToEqual", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div>sample-text</div>
    `
  });

  {
    const result = testUtils.textToEqual(wrapper, "sample-text");

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      'Expected text not to be "sample-text"'
    );
  }

  {
    const result = testUtils.textToEqual(wrapper, "sample-text-2");

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      'Expected text to be "sample-text-2", got "sample-text"'
    );
  }
});

it("toBeVisible", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div>
        <div class="visible"></div>
        <div v-show="false" class="invisible"></div>
      </div>
    `
  });

  {
    const result = testUtils.toBeVisible(wrapper.find(".visible"));

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      "Expected Vue wrapper not to be visible"
    );
  }

  {
    const result = testUtils.toBeVisible(wrapper.find(".invisible"));

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      "Expected Vue wrapper to be visible"
    );
  }
});

it("toExist", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div class="existent"></div>
    `
  });

  {
    const result = testUtils.toExist(wrapper.find(".existent"));

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual("Expected Vue wrapper not to exist");
  }

  {
    const result = testUtils.toExist(wrapper.find(".non-existent"));

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual("Expected Vue wrapper to exist");
  }
});

it("toHaveClass", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div class="sample-class"></div>
    `
  });

  {
    const result = testUtils.toHaveClass(wrapper, "sample-class");

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(
      'Expected Vue wrapper not to have "sample-class" class'
    );
  }

  {
    const result = testUtils.toHaveClass(wrapper, "sample-class-2");

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(
      'Expected Vue wrapper to have "sample-class-2" class'
    );
  }
});
