import { StateSchema } from "entities/Counter";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword", () => {
  test("should return password", () => {
    const state = {
      loginForm: {
        password: "password",
      },
    } as StateSchema;

    expect(getLoginPassword(state)).toEqual("password");
  });

  test("should return empty string", () => {
    const state = {
      loginForm: {},
    } as StateSchema;

    expect(getLoginPassword(state)).toEqual(undefined);
  });
});
