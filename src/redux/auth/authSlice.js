import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchUserDataThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateAvatarThunk,
  updateTokenThunk,
  updateUserDataThunk,
} from "./authOperations";
import { pending, rejected } from "../helpers/stateFunctions";

const initialState = {
  user: {
    name: "",
    email: "",
    avatarURL: "",
    phone: "",
    birthday: "",
    city: "",
    favorites: [],
    pets: [],
  },
  token: null,
  refreshToken: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = initialState.user;
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(updateTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = { ...state.user, ...action.payload.data };
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(updateAvatarThunk.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload.avatarURL;
        state.isLoading = false;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(fetchUserDataThunk.fulfilled, updateUserDataThunk.fulfilled),
        (state, action) => {
          state.user = { ...state.user, ...action.payload };
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          logoutThunk.pending,
          updateTokenThunk.pending,
          updateAvatarThunk.pending,
          updateUserDataThunk.pending,
          fetchUserDataThunk.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected,
          updateTokenThunk.rejected,
          updateAvatarThunk.rejected,
          updateUserDataThunk.rejected,
          fetchUserDataThunk.rejected
        ),
        rejected
      );
  },
});

export const authReducer = authSlice.reducer;

export const { updateUser } = authSlice.actions;
