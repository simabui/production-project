import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice test", () => {
  it("test set username", async () => {
    const state: Partial<LoginSchema> = { username: "123" };

    expect(loginReducer(state as LoginSchema, loginActions.setUserName("123123"))).toStrictEqual({ username: "123123" });
  });

  it("test set password", async () => {
    const state: Partial<LoginSchema> = { password: "123" };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword("123123"))).toStrictEqual({ password: "123123" });
  });
});
