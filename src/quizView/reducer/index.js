export const currentQuizReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_QUIZ": return action.payload;
    default: return state;
  }
}
