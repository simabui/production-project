import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter state", () => {
    const state: StateSchema = {
      counter: {
        value: 10,
      },
      user: {
        authData: {
          id: "1",
          username: "test",
        },
      },
    };

    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
