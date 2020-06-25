import {
  showModalOne,
  showModalTwo,
  showModalThree,
  hideModal
} from '../actions'

import { modalReducer } from './index'


describe("modalReducer", () => {
  it("should set the modal state", () => {
    const initialState = {
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false
    }

    const action = {
      type: "SET_MODAL_STATE",
      payload: {
        showModalOne: true,
        showModalTwo: false,
        showModalThree: false
      }
    }

    const expectedState = {
      showModalOne: true,
      showModalTwo: false,
      showModalThree: false
    }

    const newState = modalReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = {
      showModalOne: false,
      showModalTwo: false,
      showModalThree: false
    }

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = modalReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
