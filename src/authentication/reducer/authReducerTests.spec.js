import {
  login,
  logOut
} from '../actions'

import { userReducer } from './index'

describe("userReducer", () => {
  it("should set the userData", () => {
    const initialState = {
      id: "",
      username: "",
      permission: "",
      loggedIn: false,
      jwt: ""
    }

    const expectedState = {
      id: 1,
      username: "testuser",
      permission: "testPassword",
      loggedIn: true,
      jwt: "testJwt"
    }

    const action = {
      type:"SET_USER",
      payload: {
        id: 1,
        username: "testuser",
        permission: "testPassword",
        loggedIn: true,
        jwt: "testJwt"
      }
    }

    const newState = userReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })
})
