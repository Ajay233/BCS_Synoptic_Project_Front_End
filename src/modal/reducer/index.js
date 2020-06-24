import { initialState } from '../init/state'

export const modalReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_MODAL_STATE": return action.payload;
    default: return state;
  }
}
