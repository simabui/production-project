import { StateSchema } from "entities/Counter";
import { getLoginError } from "./getLoginError";

describe("getLoginError", () => {
  test("should return error", () => {
    const state = {
      loginForm: {
        error: "error",
      },
    } as StateSchema;

    expect(getLoginError(state)).toEqual("error");
  });

  test("should return undefined", () => {
    const state = {
      loginForm: {},
    } as StateSchema;

    expect(getLoginError(state)).toEqual(undefined);
  });
});
