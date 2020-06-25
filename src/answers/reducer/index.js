import { insertAnswer, sortUpdatedAnswer } from '../../utils/sorting'

export const answerListReducer = (state=[], action) => {
  switch (action.type) {
    case "SET_ANSWER_LIST": return action.payload;
    case "ADD_ANSWER": return insertAnswer(state, action.payload);
    case "UPDATE_ANSWER": return sortUpdatedAnswer(state, action.payload);
    case "DELETE_ANSWER": return state.filter(answer => answer !== action.payload);
    default: return state;
  }
}

export const currentAnswerReducer = (state={}, action) => {
  switch (action.type) {
    case "SET_CURRENT_ANSWER": return action.payload;
    default: return state;
  }
}
