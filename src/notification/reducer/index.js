import { initialState } from '../init/state'

export const notificationReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION": return action.payload;
    default: return state;
  }
}
