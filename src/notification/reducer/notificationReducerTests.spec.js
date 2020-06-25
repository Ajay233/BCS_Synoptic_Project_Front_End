import { setNotification, unsetNotification } from '../actions'

import { notificationReducer } from './index'

describe("notificationReducer", () => {
  it("should set the notifcation", () => {
    const initialState = {
      message: "",
      type: "",
      show: false,
      timed: true
    }

    const expectedState = {
      message: "test",
      type: "success",
      show: true,
      timed: true
    }

    const action = {
      type: "SET_NOTIFICATION",
      payload: {
        message: "test",
        type: "success",
        show: true,
        timed: true
      }
    }

    const newState = notificationReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = {
      message: "",
      type: "",
      show: false,
      timed: true
    }

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = notificationReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
