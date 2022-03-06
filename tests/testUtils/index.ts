import * as vueTestUtils from "@vue/test-utils";

import { createInjectable } from "@/components/api";
import * as testUtils from "@/testUtils";

test("createInjectable", () => {
  const injectable = createInjectable<string>();

  const wrapper = vueTestUtils.mount({
    components: {
      child: {
        setup() {
          return {
            value: injectable.inject()
          };
        },
        template: "<div>{{value }}</div>"
      }
    },
    setup() {
      injectable.provide(() => "test-string");
    },
    template: "<child />"
  });

  expect(wrapper).textToEqual("test-string");
});

test("htmlToEqual", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div>sample-text</div>
    `
  });

  {
    const result = testUtils.htmlToEqual(wrapper, "<div>sample-text</div>");

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe(
      'Expected HTML code not to be "<div>sample-text</div>"'
    );
  }

  {
    const result = testUtils.htmlToEqual(wrapper, "<div>sample-text-2</div>");

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe(
      'Expected HTML code to be "<div>sample-text-2</div>", got "<div>sample-text</div>"'
    );
  }
});

test("textToEqual", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div>sample-text</div>
    `
  });

  {
    const result = testUtils.textToEqual(wrapper, "sample-text");

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe('Expected text not to be "sample-text"');
  }

  {
    const result = testUtils.textToEqual(wrapper, "sample-text-2");

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe(
      'Expected text to be "sample-text-2", got "sample-text"'
    );
  }
});

test("toBeVisible", () => {
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
    expect(result.message()).toBe("Expected Vue wrapper not to be visible");
  }

  {
    const result = testUtils.toBeVisible(wrapper.find(".invisible"));

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe("Expected Vue wrapper to be visible");
  }
});

test("toExist", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div class="existent"></div>
    `
  });

  {
    const result = testUtils.toExist(wrapper.find(".existent"));

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe("Expected Vue wrapper not to exist");
  }

  {
    const result = testUtils.toExist(wrapper.find(".non-existent"));

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe("Expected Vue wrapper to exist");
  }
});

test("toHaveClass", () => {
  const wrapper = vueTestUtils.mount({
    template: `
      <div class="sample-class"></div>
    `
  });

  {
    const result = testUtils.toHaveClass(wrapper, "sample-class");

    expect(result.pass).toBeTrue();
    expect(result.message()).toBe(
      'Expected Vue wrapper not to have "sample-class" class'
    );
  }

  {
    const result = testUtils.toHaveClass(wrapper, "sample-class-2");

    expect(result.pass).toBeFalse();
    expect(result.message()).toBe(
      'Expected Vue wrapper to have "sample-class-2" class'
    );
  }
});
