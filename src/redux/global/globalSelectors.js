import { createSelector } from "@reduxjs/toolkit";

export const selectIsSuccess = (state) => state.global.isSuccess;
export const selectIsButtonsVisible = (state) => state.global.isButtonsVisible;
export const selectCheckboxes = (state) => state.global.checkboxes;
export const selectNews = (state) => state.global.news;
export const selectFriends = (state) => state.global.friends;
export const selectorIsLoading = (state) => state.global.isLoading;
export const selectAgeFilters = (state) => state.global.selectedAgeFilters;
export const selectSexFilters = (state) => state.global.selectedSexFilters;
export const selectBackLocation = (state) => state.global.backLocation;

export const selectNewsSort = createSelector(
  [selectNews],
  ({ data, total }) => {
    const sortedNews = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    return { data: sortedNews, total };
  }
);
