import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { notificationReducer } from './notification/reducer'
import { modalReducer } from './modal/reducer'
import { userReducer } from './authentication/reducer'
import { navBarReducer } from './navBar/reducer'
import { quizResultsReducer } from './quizSearch/actions'
import { currentQuizReducer } from './quizView/actions'
import { questionListReducer } from './questions/reducer'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "RESET_APP": return state = undefined;
    default: return allReducers(state, action);
  }
}

export const allReducers = combineReducers({
  userData: userReducer,
  navBarState: navBarReducer,
  notificationState: notificationReducer,
  modalState: modalReducer,
  quizResults: quizResultsReducer,
  currentQuiz: currentQuizReducer,
  questionList: questionListReducer,
  form: formReducer
})
