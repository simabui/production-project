import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUsername } from "../../services/loginByUsername/loginByUsername";
import { LoginSchema } from "../types/LoginSchema";

const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = "";
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
