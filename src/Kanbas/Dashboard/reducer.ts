import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Database/Database.tsx"

const ENROLLMENTS_KEY = "kanbas-enrollments";

const getInitialState = () => {
  const savedEnrollments = localStorage.getItem(ENROLLMENTS_KEY);
  return {
    enrollments: savedEnrollments ? JSON.parse(savedEnrollments) : [],
    isEnrolling: false,
    showAllCourses: true
  };
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: getInitialState(),
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    setShowAllCourses: (state, action) => {
      state.showAllCourses = action.payload;
    },
    addEnrollment: (state, action) => {
      state.enrollments = [...state.enrollments, action.payload];
      localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify(state.enrollments));
    },
    removeEnrollment: (state, action) => {
      state.enrollments = state.enrollments.filter(
        enrollment => enrollment._id !== action.payload
      );
      localStorage.setItem(ENROLLMENTS_KEY, JSON.stringify(state.enrollments));
    },
    toggleIsEnrolling: (state) => {
      state.isEnrolling = !state.isEnrolling;
    },
  },
});

export const {
  setEnrollments,
  setShowAllCourses,
  addEnrollment,
  removeEnrollment,
  toggleIsEnrolling,
} = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;