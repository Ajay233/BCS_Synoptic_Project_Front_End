import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { notificationReducer } from './notification/reducer'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "RESET_APP": return state = undefined;
    default: return allReducers(state, action);
  }
}

export const allReducers = combineReducers({
  notificationState: notificationReducer,
  form: formReducer
})
