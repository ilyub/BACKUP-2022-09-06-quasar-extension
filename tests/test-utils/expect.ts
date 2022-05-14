import * as testUtils from "@/test-utils";
import {
  htmlToEqual,
  textToEqual,
  toBeVisible,
  toExist,
  toHaveClass
  // eslint-disable-next-line import/no-internal-modules -- Ok
} from "@/test-utils/expect";
import * as vueTestUtils from "@vue/test-utils";

test("htmlToEqual", () => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: "<div>sample-text</div>"
  });

  {
    const result = htmlToEqual(wrapper, "<div>sample-text</div>");

    const expected = 'Expected HTML code not to be "<div>sample-text</div>"';

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const result = htmlToEqual(wrapper, "<div>sample-text-2</div>");

    const expected =
      'Expected HTML code ("<div>sample-text</div>") to be "<div>sample-text-2</div>"';

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});

test("textToEqual", () => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: "<div>sample-text</div>"
  });

  {
    const result = textToEqual(wrapper, "sample-text");

    const expected = 'Expected text not to be "sample-text"';

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const result = textToEqual(wrapper, "sample-text-2");

    const expected = 'Expected text ("sample-text") to be "sample-text-2"';

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});

test("toBeVisible", () => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: `
      <div>
        <div class="visible"></div>
        <div v-show="false" class="invisible"></div>
      </div>
    `
  });

  {
    const result = toBeVisible(wrapper.find(".visible"));

    const expected = "Expected Vue wrapper not to be visible";

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const result = toBeVisible(wrapper.find(".invisible"));

    const expected = "Expected Vue wrapper to be visible";

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});

test("toExist", () => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: '<div class="existent"></div>'
  });

  {
    const result = toExist(wrapper.find(".existent"));

    const expected = "Expected Vue wrapper not to exist";

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const result = toExist(wrapper.find(".non-existent"));

    const expected = "Expected Vue wrapper to exist";

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});

test("toHaveClass", () => {
  const wrapper = vueTestUtils.mount({
    global: testUtils.globalMountOptions(),
    template: '<div class="sample-class"></div>'
  });

  {
    const result = toHaveClass(wrapper, "sample-class");

    const expected = 'Expected Vue wrapper not to have "sample-class" class';

    expect(result.pass).toBeTrue();
    expect(result.message()).toStrictEqual(expected);
  }

  {
    const result = toHaveClass(wrapper, "sample-class-2");

    const expected = 'Expected Vue wrapper to have "sample-class-2" class';

    expect(result.pass).toBeFalse();
    expect(result.message()).toStrictEqual(expected);
  }
});
