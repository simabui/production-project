import { CounterSchema } from "entities/Counter/model/types/CounterSchema";
import { UserSchema } from "entities/User/model/types/user";
import { LoginSchema } from "features/AuthByUsername/model/types/LoginSchema";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}
