import { initialState } from '../init/state'

export const navBarReducer = (state=initialState, action) => {
  switch (action.type) {
    case "SET_DROPDOWN_STATE": return action.payload;
    default: return state;
  }
}
