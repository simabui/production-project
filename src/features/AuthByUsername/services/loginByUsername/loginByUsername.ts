import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localstorage";
import { User, userActions } from "../../../../entities/User/index";

interface LoginByUsernameProps {
  username: string;
  password: string;
}
const LOGIN_URL = "/login";
const LOGIN_BY_USERNAME = "login/loginByUsername";

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  LOGIN_BY_USERNAME,
  async (authData: LoginByUsernameProps, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post(LOGIN_URL, authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log("e ->", e);
      return rejectWithValue(i18n.t("errorAuth"));
    }
  },
);
