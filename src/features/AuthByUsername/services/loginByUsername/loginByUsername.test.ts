import axios from "axios";

import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { userActions } from "../../../../entities/User/index";
import { loginByUsername } from "./loginByUsername";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const URL = "http://localhost:8000/login";

describe("loginByUsername", () => {
  it("should return user data on successful login", async () => {
    const userData = { id: "1", username: "testuser" };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "testuser", password: "password123" });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(mockedAxios.post).toHaveBeenCalledWith(URL, { username: "testuser", password: "password123" });
    expect(result.meta.requestStatus).toEqual("fulfilled");
  });

  it("should return error on failed login", async () => {
    const errorMessage = "Invalid credentials";
    mockedAxios.post.mockReturnValue(Promise.reject(new Error(errorMessage)));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: "testuser", password: "wrongpassword" });

    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.setAuthData(expect.anything()));
    expect(mockedAxios.post).toHaveBeenCalledWith(URL, { username: "testuser", password: "wrongpassword" });
    expect(result.meta.requestStatus).toEqual("rejected");
  });
});
