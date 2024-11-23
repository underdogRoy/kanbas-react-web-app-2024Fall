// src/Kanbas/Enrollments/reducer.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, action) => {
      state.enrollments = [...state.enrollments, action.payload];
    },
    removeEnrollment: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== action.payload
      );
    },
  },
});

export const { 
  setEnrollments, 
  addEnrollment, 
  removeEnrollment 
} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;