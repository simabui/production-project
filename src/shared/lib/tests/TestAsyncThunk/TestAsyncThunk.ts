import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";

import { StateSchema } from "entities/Counter";

type ActionCreator<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  actionCreator: ActionCreator<Return, Arg, RejectedValue>;
  dispatch: Dispatch;
  getState: () => StateSchema;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = () => ({}) as StateSchema;
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    return await action(this.dispatch, this.getState, undefined);
  }
}
