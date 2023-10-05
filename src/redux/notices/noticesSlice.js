import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addNewNoticeThunk,
  addNewPetThunk,
  addOrDeleteFavoriteNoticeThunk,
  deleteOwnNoticeThunk,
  deletePetThunk,
  fetchAllNoticesThunk,
  fetchFavoriteNoticesThunk,
  fetchFilteredNoticesThunk,
  fetchNoticeByIdThunk,
  fetchNoticesByCategoryAndSearchThunk,
  fetchNoticesByCategoryThunk,
  fetchNoticesBySearchThunk,
  fetchOwnNoticesThunk,
} from "./noticesOperations";
import { pending, rejected } from "../helpers/stateFunctions";

export const petFormDataInitialState = {
  category: "",
  title: "",
  name: "",
  date: "",
  type: "",
  sex: "",
  location: "",
  price: "",
  file: null,
  comments: "",
};

const initialState = {
  notices: {
    data: [],
    total: 0,
  },
  ageArray: [],
  sexArray: [],
  chosenNotice: null,
  petData: {},
  petFormData: null,
  step: 1,
  isLoading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    updateSexArray: (state, action) => {
      state.sexArray.push(action.payload);
    },
    updateAgeArray: (state, action) => {
      state.ageArray.push(action.payload);
    },
    updateStep: (state, action) => {
      state.step = action.payload;
    },
    addPetFormData: (state, action) => {
      state.petFormData = { ...state.petFormData, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewPetThunk.fulfilled, (state, action) => {
        state.petData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNoticeByIdThunk.fulfilled, (state, action) => {
        state.chosenNotice = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchNoticesBySearchThunk.fulfilled,
          fetchNoticesByCategoryThunk.fulfilled,
          fetchNoticesByCategoryAndSearchThunk.fulfilled,
          fetchFilteredNoticesThunk.fulfilled,
          fetchAllNoticesThunk.fulfilled,
          fetchOwnNoticesThunk.fulfilled,
          fetchFavoriteNoticesThunk.fulfilled
        ),
        (state, action) => {
          state.notices.data = action.payload.data;
          state.notices.total = action.payload.total;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          addOrDeleteFavoriteNoticeThunk.fulfilled,
          deletePetThunk.fulfilled,
          deleteOwnNoticeThunk.fulfilled,
          addNewNoticeThunk.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNoticesBySearchThunk.pending,
          fetchNoticesByCategoryThunk.pending,
          fetchNoticesByCategoryAndSearchThunk.pending,
          fetchFilteredNoticesThunk.pending,
          fetchAllNoticesThunk.pending,
          fetchOwnNoticesThunk.pending,
          fetchFavoriteNoticesThunk.pending,
          fetchNoticeByIdThunk.pending,
          addNewPetThunk.pending,
          addOrDeleteFavoriteNoticeThunk.pending,
          deleteOwnNoticeThunk.pending,
          deletePetThunk.pending,
          addNewNoticeThunk.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchNoticesBySearchThunk.rejected,
          fetchNoticesByCategoryThunk.rejected,
          fetchNoticesByCategoryAndSearchThunk.rejected,
          fetchFilteredNoticesThunk.rejected,
          fetchAllNoticesThunk.rejected,
          fetchOwnNoticesThunk.rejected,
          fetchFavoriteNoticesThunk.rejected,
          fetchNoticeByIdThunk.rejected,
          addNewPetThunk.rejected,
          addOrDeleteFavoriteNoticeThunk.rejected,
          deleteOwnNoticeThunk.rejected,
          deletePetThunk.rejected,
          addNewNoticeThunk.rejected
        ),
        rejected
      );
  },
});

export const noticesReducer = noticesSlice.reducer;

export const { updateSexArray, updateAgeArray, updateStep, addPetFormData } =
  noticesSlice.actions;
