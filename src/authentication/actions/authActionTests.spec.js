import {
  login,
  logOut
} from './index'

import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("login", () => {
  it("should return an action to set userData", () => {
    const store = mockStore({})

    const response = {
      data: {
        user: {
          id: 1,
          username: "testUser",
          permission: "Edit"
        },
        jwt: "testJwt"
      }
    }

    const expectedAction = {
      type:"SET_USER",
      payload: {
        id: 1,
        username: "testUser",
        permission: "Edit",
        loggedIn: true,
        jwt: "testJwt"
      }
    }

    store.dispatch(login()).then(() => {
      mockAxios.mockResponse(response)
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})

describe("login", () => {
  it("should return an action to set userData", () => {

    const expectedAction = {
      type:"RESET_APP"
    }

    expect(logOut()).toEqual(expectedAction)

  })
})
