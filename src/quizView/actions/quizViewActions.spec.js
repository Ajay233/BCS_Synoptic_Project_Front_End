import {
  setCurrentQuiz,
  clearCurrentQuiz,
  createQuiz,
  updateQuiz
} from './index'

import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("createQuiz", () => {
  it("should return an action to set currentQuiz", () => {
    const store = mockStore({})
    const response = {
      data: {id:1}
    }

    const expectedAction = {
      type: "SET_CURRENT_QUIZ",
      payload: {id:1}
    }

    store.dispatch(createQuiz())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

describe("updateQuiz", () => {
  it("should return an action to set currentQuiz", () => {
    const store = mockStore({})
    const response = {
      data: {id:1}
    }

    const expectedAction = {
      type: "SET_CURRENT_QUIZ",
      payload: {id:1}
    }
    store.dispatch(updateQuiz())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

describe("setCurrentQuiz", () => {
  it("should return an action to set currentQuiz", () => {
    const quiz = {id:1}
    const expectedAction = {
      type: "SET_CURRENT_QUIZ",
      payload: {id:1}
    }

    expect(setCurrentQuiz(quiz)).toEqual(expectedAction)
  })
})

describe("clearCurrentQuiz", () => {
  it("should return an action to set currentQuiz", () => {
    const expectedAction = {
      type: "SET_CURRENT_QUIZ",
      payload: {}
    }
    expect(clearCurrentQuiz()).toEqual(expectedAction)
  })
})
