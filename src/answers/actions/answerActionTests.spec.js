import {
  getAnswers,
  createAnswers,
  updateAnswers,
  deleteAnswer,
  setCurrentAnswer,
  clearCurrentAnswer
} from './index'

import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("getAnswers", () => {
  it("should return an action", () => {
    const store = mockStore({})

    const response = [ { id:1 },{ id:2 } ]

    const expectedAction = {
      type: "SET_ANSWER_LIST",
      payload: [ { id:1 },{ id:2 } ]
    }

    store.dispatch(getAnswers()).then(() => {
      mockAxios.mockResponse(response)
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})

describe("createAnswers", () => {
  it("should return an action", () => {
    const store = mockStore({})

    const response = [ { id:1 } ]

    const expectedAction = {
      type: "ADD_ANSWER",
      payload: [ { id:1 } ]
    }

    store.dispatch(createAnswers()).then(() => {
      mockAxios.mockResponse(response)
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})

describe("updateAnswers", () => {
  it("should return an action", () => {
    const store = mockStore({})

    const response = [ { id:1 } ]

    const expectedAction = {
      type: "ADD_ANSWER",
      payload: [ { id:1 } ]
    }

    store.dispatch(updateAnswers()).then(() => {
      mockAxios.mockResponse(response)
      expect(store.getActions()).toEqual(expectedAction)
    })
  })
})
