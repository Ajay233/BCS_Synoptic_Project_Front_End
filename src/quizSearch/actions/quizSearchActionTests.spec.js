import {
  getQuizzesByName,
  getAllQuizzes,
  deleteQuiz,
  clearQuizResults
} from './index'

import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("getQuizzes", () => {
  it("should return an action to set the quizResults", () => {
    const store = mockStore({})

    const response = {
      data: [{id:1}, {id:2}]
    }

    const expectedAction = {
      type: "SET_QUIZ_RESULTS",
      payload: [{id:1}, {id:2}]
    }

    store.dispatch(getQuizzesByName())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

describe("getAllQuizzes", () => {
  it("should return an action to set quiz results", () => {
    const store = mockStore({})

    const response = {
      data: [{id:1}, {id:2}]
    }

    const expectedAction = {
      type: "SET_QUIZ_RESULTS",
      payload: [{id:1}, {id:2}]
    }

    store.dispatch(getAllQuizzes())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

describe("deleteQuiz", () => {
  it("should delete a quiz from quizResults", () => {
    const question = {id:1}

    const expectedAction = {
      type: "DELETE_QUIZ_RESULT",
      payload: {id:1}
    }

    expect(deleteQuiz(question)).toEqual(expectedAction)
  })
})

describe("clearQuizResults", () => {
  it("should reset the quizResults back to initial state", () => {

    const expectedAction = {
      type: "SET_QUIZ_RESULTS",
      payload: []
    }

    expect(clearQuizResults()).toEqual(expectedAction)
  })
})
