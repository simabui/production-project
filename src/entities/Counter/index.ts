import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "./model/slice/counterSlice";
import type { CounterSchema } from "./model/types/CounterSchema";
import { Counter } from "./ui/Counter";

export { Counter, counterReducer, CounterSchema, StateSchema };
