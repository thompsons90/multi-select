import { createSlice } from "@reduxjs/toolkit";

export const assignSlice = createSlice({
  name: "assignment",
  initialState: {
    assigned: [],
  },
  reducers: {
    select: (state) => {
      // add a user to the selected list
      state.assigned = [...assigned, selected];
    },
    unselect: (state) => {
      // remove a user from selected list
      state.assigned.slice(selected, 1);
    },
    selectAll: (state) => {
      // select all users to list
    },
  },
});

export const { select, unselect, selectAll } = assignSlice.actions;

export default assignSlice.reducer;
