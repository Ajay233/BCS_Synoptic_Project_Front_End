export const quizResultsReducer = (state=[], action) => {
  switch (action.type) {
    case "SET_QUIZ_RESULTS": return action.payload;
    case "DELETE_QUIZ_RESULT": return state.filter(quiz => quiz.id !== action.payload.id);
    default: return state;
  }
}
