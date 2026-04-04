import { CounterSchema } from "../types/CounterSchema";
import { counterActions, counterReducer } from "./counterSlice";

describe("CounterSlice", () => {
  test("should decrement value", () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });

  test("should increment value", () => {
    const state: CounterSchema = {
      value: 10,
    };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });

  test("should initialize with default value", () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
