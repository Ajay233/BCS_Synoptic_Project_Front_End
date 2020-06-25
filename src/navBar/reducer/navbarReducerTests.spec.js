import {
  showDropdown,
  hideDropdown
} from '../actions'

import { navBarReducer } from './index'

describe("navBarReducer", () => {
  it("should set the navbar statet true", () => {
    const initialState = {
      showDropdown: false
    }
    const expectedState = {
      showDropdown: true
    }

    const action = {
      type: "SET_DROPDOWN_STATE",
      payload: {
        showDropdown: true
      }
    }

    const newState = navBarReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should set the navbar state back to false", () => {
    const initialState = {
      showDropdown: true
    }
    const expectedState = {
      showDropdown: false
    }

    const action = {
      type: "SET_DROPDOWN_STATE",
      payload: {
        showDropdown: false
      }
    }

    const newState = navBarReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = {
      showDropdown: true
    }

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = navBarReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
