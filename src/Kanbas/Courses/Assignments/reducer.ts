import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: [],
}

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, {payload: assignment}) => {
      state.assignments = [...state.assignments, assignment] as any;
    },
    updateAssignment: (state, {payload: assignment}) => {
      state.assignments = state.assignments.map((a: any) => a._id === assignment._id ? assignment : a) as any;
    },
    deleteAssignment: (state, {payload: aid}) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== aid);
    },
  },
})
export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;