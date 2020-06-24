export const answerListReducer = (state=[], action) => {
  switch (action.type) {
    case "SET_ANSWER_LIST": return action.payload;
    default: return state;
  }
}

export const currentAnswerReducer = (state={}, action) => {
  switch (action.type) {
    case "SET_CURRENT_ANSWER": return action.payload;
    default: return state;
  }
}
