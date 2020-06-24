import { initialState } from '../init/state'

export const Reducer = (state=initialState, action) => {
  switch (action.type) {
    case "": return action.payload;
    default: return state;
  }
}
