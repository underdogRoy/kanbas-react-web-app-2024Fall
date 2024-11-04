// reducer.ts
const initialState = {
  enrollments: [],
};

const enrollmentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "add-enrollment":
      return {
        ...state,
        enrollments: [...state.enrollments, action.enrollment],
      };
    
    case "remove-enrollment":
      return {
        ...state,
        enrollments: state.enrollments.filter(
          (enrollment: any) =>
            !(
              enrollment.userId === action.enrollment.userId &&
              enrollment.courseId === action.enrollment.courseId
            )
        ),
      };
    
    default:
      return state;
  }
};

export default enrollmentsReducer;