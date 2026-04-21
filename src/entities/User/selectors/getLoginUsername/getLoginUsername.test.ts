import { StateSchema } from "entities/Counter";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername", () => {
  test("should return username", () => {
    const state = {
      loginForm: {
        username: "username",
      },
    } as StateSchema;

    expect(getLoginUsername(state)).toEqual("username");
  });
});
