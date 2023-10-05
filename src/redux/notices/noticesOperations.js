import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addNewNotice,
  addNewPet,
  addOrDeleteFavoriteNotice,
  deleteOwnNotice,
  deletePet,
  fetchNoticesByCategory,
  fetchNoticesByCategoryAndSearch,
  fetchNoticesBySearch,
  fetchNoticeById,
  fetchFilteredNotices,
  fetchAllNotices,
  fetchOwnNotices,
  fetchFavoriteNotices,
} from "../../services/api/api";
import { fetchUserDataThunk, updateTokenThunk } from "../auth/authOperations";

export const fetchNoticesBySearchThunk = createAsyncThunk(
  "notices/fetchNoticesBySearch",
  async ({ page, limit, searchQuery }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchNoticesBySearch({ page, limit, searchQuery });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNoticesByCategoryThunk = createAsyncThunk(
  "notices/fetchNoticesByCategory",
  async ({ page, limit, category }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchNoticesByCategory({ page, limit, category });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNoticesByCategoryAndSearchThunk = createAsyncThunk(
  "notices/fetchNoticesByCategoryAndSearch",
  async (
    { page, limit, category, searchQuery },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await fetchNoticesByCategoryAndSearch({
        page,
        limit,
        category,
        searchQuery,
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchNoticeByIdThunk = createAsyncThunk(
  "notices/fetchNoticeById",
  async (noticeId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchNoticeById(noticeId);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFilteredNoticesThunk = createAsyncThunk(
  "notices/fetchFilteredNotices",
  async (
    { age, sex, category, page, limit, searchQuery },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await fetchFilteredNotices({
        age,
        sex,
        category,
        page,
        limit,
        searchQuery,
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAllNoticesThunk = createAsyncThunk(
  "notices/fetchAllNotices",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetchAllNotices();
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchOwnNoticesThunk = createAsyncThunk(
  "notices/fetchOwnNotices",
  async (
    { age, sex, page, limit, searchQuery },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await fetchOwnNotices({
        page,
        limit,
        age,
        sex,
        searchQuery,
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFavoriteNoticesThunk = createAsyncThunk(
  "notices/fetchFavoriteNotices",
  async (
    { age, sex, page, limit, searchQuery },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await fetchFavoriteNotices({
        age,
        sex,
        page,
        limit,
        searchQuery,
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addNewPetThunk = createAsyncThunk(
  "pet/addNewPet",
  async (pet, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addNewPet(pet);
      dispatch(fetchUserDataThunk());
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deletePetThunk = createAsyncThunk(
  "pet/deletePet",
  async (petId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deletePet(petId);
      dispatch(fetchUserDataThunk());
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteOwnNoticeThunk = createAsyncThunk(
  "notices/deleteOwnNotice",
  async (noticeId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await deleteOwnNotice(noticeId);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addOrDeleteFavoriteNoticeThunk = createAsyncThunk(
  "notices/addOrDeleteFavoriteNotice",
  async (noticeId, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addOrDeleteFavoriteNotice(noticeId);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addNewNoticeThunk = createAsyncThunk(
  "notices/addNewNotice",
  async (notice, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await addNewNotice(notice);
      dispatch(fetchUserDataThunk());
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        dispatch(updateTokenThunk());
      }
      return rejectWithValue(error.response.data.message);
    }
  }
);
