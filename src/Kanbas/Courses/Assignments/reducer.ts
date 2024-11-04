import {assignments} from "../../Database/Database.tsx";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {assignments: assignments};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, {payload: assignment}) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                points: assignment.points,
                due_date: assignment.due_date,
                available_from_date: assignment.available_from_date,
                available_until_date: assignment.available_until_date, 
                course: assignment.course
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, {payload: assignmentId}) => {
            state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
        },
        updateAssignment: (state, {payload: updatedAssignment}) => {
            const index = state.assignments.findIndex((a) => a._id === updatedAssignment._id);
            if (index !== -1) {
                state.assignments[index] = {
                  ...state.assignments[index],
                  ...updatedAssignment,
                };
              } 
          },
    }
});

export const {addAssignment, deleteAssignment, updateAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;