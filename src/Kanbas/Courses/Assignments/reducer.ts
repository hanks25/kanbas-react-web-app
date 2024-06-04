import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
}

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, {payload: assignment}) => {
      state.assignments.push(assignment);
    },
    updateAssignment: (state, {payload: assignment}) => {
      state.assignments = state.assignments.map((a) => a._id === assignment._id ? assignment : a);
    },
    deleteAssignment: (state, {payload: aid}) => {
      state.assignments = state.assignments.filter((a) => a._id !== aid);
    },
  },
})
export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;