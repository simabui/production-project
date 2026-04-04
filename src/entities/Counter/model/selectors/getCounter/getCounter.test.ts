import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "./getCounter";

describe("getCounter", () => {
  test("should return counter state", () => {
    const state: StateSchema = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state)).toEqual({ value: 10 });
  });
});
