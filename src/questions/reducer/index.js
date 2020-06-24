export const questionListReducer = (state=[], action) => {
  switch (action.type) {
    case "SET_QUESTION_LIST": return action.payload;
    default: return state;
  }
}
