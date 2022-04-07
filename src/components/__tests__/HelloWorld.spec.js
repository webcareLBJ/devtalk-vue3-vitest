import { describe, it, expect, test, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

const fakeName = vi.fn().getMockName();

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest"}});
    expect(wrapper.props().subline).toBe("asdadasd");
  });

  it("random msg", () => {
    const wrapper = mount(HelloWorld, { props: { msg: fakeName}});
    expect(wrapper.props().msg).toBe(fakeName);
  });

  test("hello smiley", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello 🙂" , subline: "asdasdasdasdasdasd 123" }});
    expect(wrapper.props().msg).toBe("Hello 🙂");
  });

  test("test function", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello 🙂", subline: "asdasdasdasdasdasd 123" }});
    expect(wrapper.vm.createSubline()).toBe("Hello 🙂 asdasdasdasdasdasd 123");
  });
  test("test computed", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello 🙂", subline: "asdasdasdasdasdasd 123" } });
    expect(wrapper.vm.betterMsg).toContain("¯\_(ツ)_/¯");
  });
});




describe("HelloWorld Pinia", () => {
  setActivePinia(createPinia());
  it("form to store", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest", subline: "asdasdasdasdasdasd 123" }});
    const textInput = wrapper.find('input')
    textInput.setValue('some value')
    expect(wrapper.vm.counter.myInput).toBe("some value");

  });
});