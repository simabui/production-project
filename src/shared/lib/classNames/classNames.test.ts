import { classNames } from "./classNames";

describe("classNames", () => {
  test("1 param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional", () => {
    expect(classNames("someClass", {}, ["additionalClass"])).toBe("someClass additionalClass");
  });

  test("with mods", () => {
    expect(classNames("someClass", { hovered: true, scrollable: false, selected: "yes" }, ["additionalClass"])).toBe(
      "someClass additionalClass hovered selected",
    );
  });

  test("with mods undefined", () => {
    expect(classNames("someClass", { hovered: true, scrollable: false, selected: undefined }, ["additionalClass"])).toBe(
      "someClass additionalClass hovered",
    );
  });
});
