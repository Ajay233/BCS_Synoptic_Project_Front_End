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
  it("should return an action to set the answerList", () => {
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
  it("should return an action to add an answer to the answerList", () => {
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
  it("should return an action to updated an answer in the answerList", () => {
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

describe("deleteAnswer", () => {
  it("should return an action to delete an answer fom the the answerList", () => {
    const store = mockStore({})

    const answer = [ { id:1 } ]

    const expectedAction = {
      type: "DELETE_ANSWER",
      payload: [ { id:1 } ]
    }

    expect(deleteAnswer(answer)).toEqual(expectedAction)
  })
})

describe("setCurrentAnswer", () => {
  it("should return an action set the currentAnswer", () => {
    const store = mockStore({})

    const answer = { id:1 }

    const expectedAction = {
      type: "SET_CURRENT_ANSWER",
      payload: { id:1 }
    }

    expect(setCurrentAnswer(answer)).toEqual(expectedAction)
  })
})

describe("clearCurrentAnswer", () => {
  it("should return an action to set the currentAnswer with an empty object", () => {
    const store = mockStore({})

    const expectedAction = {
      type: "SET_CURRENT_ANSWER",
      payload: {}
    }

    expect(clearCurrentAnswer()).toEqual(expectedAction)
  })
})
