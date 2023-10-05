import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchFriends,
  fetchNews,
  fetchNewsBySearch,
} from "../../services/api/api";
import { updateTokenThunk } from "../auth/authOperations";

export const fetchNewsThunk = createAsyncThunk(
  "global/fetchNews",
  async ({ page, limit }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchNews({ page, limit });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNewsBySearchThunk = createAsyncThunk(
  "global/fetchNewsBySearch",
  async ({ page, limit, searchQuery }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchNewsBySearch({ page, limit, searchQuery });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFriendsThunk = createAsyncThunk(
  "global/fetchFriends",
  async ({ page, limit }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchFriends({ page, limit });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);
