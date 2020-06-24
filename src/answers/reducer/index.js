export const answerListReducer = (state=[], action) => {
  switch (action.type) {
    case "SET_ANSWER_LIST": return action.payload;
    case "ADD_ANSWER": return [...state, action.payload];
    case "UPDATE_ANSWER": return state.map(answer => answer.id === action.payload.id ? action.payload : answer);
    case "DELETE_ANSWER": return state.filter(answer => answer.id !== action.payload.id);
    default: return state;
  }
}

export const currentAnswerReducer = (state={}, action) => {
  switch (action.type) {
    case "SET_CURRENT_ANSWER": return action.payload;
    default: return state;
  }
}
