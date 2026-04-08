import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User } from "entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}
const LOGIN_URL = "http://localhost:8000/login";
const LOGIN_BY_USERNAME = "login/loginByUsername";

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  LOGIN_BY_USERNAME,
  async (authData: LoginByUsernameProps, thunkAPI) => {
    try {
      const response = await axios.post(LOGIN_URL, authData);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log("e ->", e);
      return thunkAPI.rejectWithValue("error");
    }
  },
);
