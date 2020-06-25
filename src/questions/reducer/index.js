import { insertQuestion, sortUpdatedQuestion } from '../../utils/sorting'

export const questionListReducer = (state=[], action) => {
  switch (action.type) {
    case "SET_QUESTION_LIST": return action.payload;
    case "ADD_QUESTION": return insertQuestion(state, action.payload);
    case "UPDATE_QUESTION": return sortUpdatedQuestion(state, action.payload);
    case "DELETE_QUESTION": return state.filter(question => question !== action.payload)
    default: return state;
  }
}

export const currentQuestionReducer = (state={}, action) => {
  switch (action.type) {
    case "SET_CURRENT_QUESTION": return action.payload;
    default: return state;
  }
}
