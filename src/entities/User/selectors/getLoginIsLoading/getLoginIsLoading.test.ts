import { StateSchema } from "entities/Counter";
import { getLoginIsLoading } from "./getLoginIsLoading";

describe("getLoginIsLoading", () => {
  test("should return isLoading", () => {
    const state = {
      loginForm: {
        isLoading: true,
      },
    } as StateSchema;

    expect(getLoginIsLoading(state)).toEqual(true);
  });

  test("should return false", () => {
    const state = {
      loginForm: {
        isLoading: false,
      },
    } as StateSchema;

    expect(getLoginIsLoading(state)).toEqual(false);
  });
});
