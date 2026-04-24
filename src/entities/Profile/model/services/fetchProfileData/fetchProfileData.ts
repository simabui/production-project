import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profile";

const LOGIN_URL = "/profile";
const LOGIN_BY_USERNAME = "profile/fetchProfileData";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(LOGIN_BY_USERNAME, async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  try {
    const response = await extra.api.get<Profile>(LOGIN_URL);

    return response.data;
  } catch (e) {
    console.log("e ->", e);
    return rejectWithValue(i18n.t("errorAuth"));
  }
});
