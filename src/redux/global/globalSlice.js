import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialCheckboxesState } from "../../modules/filter/service/initialCheckboxesState";
import {
  fetchFriendsThunk,
  fetchNewsBySearchThunk,
  fetchNewsThunk,
} from "./globalOperations";

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  news: {
    data: [],
    total: null,
  },
  friends: {
    data: [],
    total: null,
  },
  selectedAgeFilters: [],
  selectedSexFilters: [],
  isSuccess: false,
  isButtonsVisible: false,
  backLocation: "",
  checkboxes: initialCheckboxesState,
  isLoading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      const { optionType, filterName } = action.payload;
      const index =
        optionType === "age"
          ? state.selectedAgeFilters.indexOf(filterName)
          : state.selectedSexFilters.indexOf(filterName);

      if (index === -1) {
        optionType === "age"
          ? state.selectedAgeFilters.push(filterName)
          : state.selectedSexFilters.push(filterName);
      } else {
        optionType === "age"
          ? state.selectedAgeFilters.splice(index, 1)
          : state.selectedSexFilters.splice(index, 1);
      }
    },
    setIsSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },
    toggleButtons: (state) => {
      state.isButtonsVisible = !state.isButtonsVisible;
      state.checkboxes.showCheckboxByAge = false;
      state.checkboxes.showCheckboxByGender = false;
    },
    toggleCheckboxByAge: (state) => {
      state.checkboxes.showCheckboxByAge = !state.checkboxes.showCheckboxByAge;
    },
    toggleCheckboxByGender: (state) => {
      state.checkboxes.showCheckboxByGender =
        !state.checkboxes.showCheckboxByGender;
    },
    toggleAgeOption: (state, action) => {
      const option = action.payload;
      state.checkboxes.ageOptions[option] =
        !state.checkboxes.ageOptions[option];
    },
    toggleGenderOption: (state, action) => {
      const option = action.payload;
      state.checkboxes.sexOptions[option] =
        !state.checkboxes.sexOptions[option];
    },
    setSelectCheckboxName: (state, action) => {
      const option = action.payload;
      state.checkboxes.selectCheckbox = option;
    },
    updateBackLocation: (state, action) => {
      state.backLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriendsThunk.fulfilled, (state, action) => {
        state.friends.data = action.payload.data;
        state.friends.total = action.payload.total;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(fetchNewsThunk.fulfilled, fetchNewsBySearchThunk.fulfilled),
        (state, action) => {
          state.news.data = action.payload.data;
          state.news.total = action.payload.total;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchNewsThunk.pending,
          fetchFriendsThunk.pending,
          fetchNewsBySearchThunk.pending
        ),
        pending
      )
      .addMatcher(
        isAnyOf(
          fetchNewsThunk.rejected,
          fetchFriendsThunk.rejected,
          fetchNewsBySearchThunk.rejected
        ),
        rejected
      );
  },
});

export const {
  toggleFilter,
  setIsSuccess,
  toggleButtons,
  toggleCheckboxByAge,
  toggleCheckboxByGender,
  toggleAgeOption,
  toggleGenderOption,
  setSelectCheckboxName,
  updateBackLocation,
} = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
