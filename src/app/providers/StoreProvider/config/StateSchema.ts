import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { CounterSchema } from "entities/Counter/model/types/CounterSchema";
import { ProfileSchema } from "entities/Profile/index";
import { UserSchema } from "entities/User/model/types/user";
import { LoginSchema } from "features/AuthByUsername/model/types/LoginSchema";
import { NavigateOptions, To } from "react-router-dom";
import { createReducerManager } from "./reducerManager";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReturnType<typeof createReducerManager>;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => ReturnType<Reducer>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
