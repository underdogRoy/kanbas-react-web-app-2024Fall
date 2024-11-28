import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer.ts";
import accountReducer from "./Account/reducer.ts";
import assignmentsReducer from "./Courses/Assignments/reducer.ts";
import enrollmentsReducer from "./Enrollments/reducer.ts";


const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,


    
  },
});
export default store;