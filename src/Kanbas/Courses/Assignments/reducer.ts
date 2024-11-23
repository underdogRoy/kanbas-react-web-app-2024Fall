import { createSlice } from "@reduxjs/toolkit";

// Define the Assignment interface based on your existing structure
interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  due_date: string;
  available_from_date: string;
  available_until_date: string;
  course: string;
}

// Define the state interface
interface AssignmentsState {
  assignments: Assignment[];
  assignment: Assignment;
}

const initialState: AssignmentsState = {
  assignments: [],
  assignment: {
    _id: "",
    title: "New Assignment",
    description: "",
    points: 100,
    due_date: "",
    available_from_date: "",
    available_until_date: "",
    course: ""
  }
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = {
          ...state.assignments[index],
          ...action.payload,
        };
      }
    },

    setAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;