import { StateSchema } from "entities/Counter";
import { getUserAuthData } from "./getUserAuthData";

describe("getUserAuthData", () => {
  test("should return authData", () => {
    const state = {
      user: {
        authData: {
          id: "1",
          username: "username",
        },
      },
    } as StateSchema;

    expect(getUserAuthData(state)).toEqual({
      id: "1",
      username: "username",
    });
  });

  test("should return undefined", () => {
    const state = {
      user: {},
    } as StateSchema;

    expect(getUserAuthData(state)).toEqual(undefined);
  });
});
