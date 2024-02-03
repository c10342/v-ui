import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import VButton from "../index";

describe("Button 组件", () => {
  test("测试Button组件的text", async () => {
    const wrapper = mount(VButton);
    await nextTick();

    const tagElement = wrapper.find(".v-button");

    expect(tagElement.text()).toBe("按钮");
  });
});
