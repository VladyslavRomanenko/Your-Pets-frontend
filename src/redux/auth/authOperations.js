import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  setToken,
  register,
  login,
  logout,
  getCurrentUser,
  updateUserData,
  updateAvatar,
  fetchUserData,
  updateToken,
} from "../../services/api/api.js";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await register({ name, email, password });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const data = await login(credentials);
      dispatch(fetchUserDataThunk());
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateTokenThunk = createAsyncThunk(
  "auth/updateToken",
  async (_, { rejectWithValue, getState }) => {
    const persistedToken = getState().auth.token;
    const refreshToken = getState().auth.refreshToken;

    if (!persistedToken) {
      return rejectWithValue("Token is not found!");
    }

    if (!refreshToken) {
      return rejectWithValue("Refresh token is not found!");
    }

    try {
      setToken(persistedToken);
      const { token } = await updateToken(refreshToken);
      const { data } = await getCurrentUser();
      return { token, data };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const persistedToken = getState().auth.token;

    if (!persistedToken) {
      return rejectWithValue("Token is not found!");
    }

    try {
      setToken(persistedToken);
      const { data } = await getCurrentUser();
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserDataThunk = createAsyncThunk(
  "auth/updateUserData",
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await updateUserData(credentials);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  "auth/updateAvatar",
  async (avatar, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await updateAvatar(avatar);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchUserDataThunk = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchUserData();

      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);
