import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  setCurrentQuestion,
  clearCurrentQuestion
} from './index'

import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)

describe("getQuestions", () => {
  it("should return an action to set the questionList", () => {
    const store = mockStore({})

    const response = {
      data: [{id:1}, {id:2}]
    }

    const expectedAction = {
      type: "SET_QUESTION_LIST",
      payload: [{id:1}, {id:2}]
    }

    store.dispatch(getQuestions())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  it("should return an action to set the questionList to empty if NO CONTENT status recieved", () => {
    const store = mockStore({})

    const response = {
      status: 204
    }

    const expectedAction = {
      type: "SET_QUESTION_LIST",
      payload: []
    }

    store.dispatch(getQuestions())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

describe("createQuestion", () => {
  it("should return an action to add a question to the questionList", () => {
    const store = mockStore({})

    const response = {
      data: [{id:1}]
    }

    const expectedAction = {
      type: "ADD_QUESTION",
      payload: {id:1}
    }

    store.dispatch(createQuestion())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})

describe("updateQuestion", () => {
  it("should return an action to update a question in the questionList", () => {
    const store = mockStore({})

    const response = {
      data: [{id:1}]
    }

    const expectedAction1 = {
      type: "SET_CURRENT_QUESTION",
      payload: {id:1}
    }

    const expectedAction2 = {
      type: "UPDATE_QUESTION",
      payload: {id:1}
    }

    store.dispatch(updateQuestion())
    mockAxios.mockResponse(response)
    expect(store.getActions()[0]).toEqual(expectedAction1)
    expect(store.getActions()[1]).toEqual(expectedAction2)
  })
})

describe("deleteQuestion", () => {
  it("should return an action to delete a question from the actionList", () => {
    const question = {id:1}

    const expectedAction = {
      type: "DELETE_QUESTION",
      payload: {id:1}
    }

    expect(deleteQuestion(question)).toEqual(expectedAction)
  })
})

describe("setCurrentQuestion", () => {
  it("should return an action set the currentQuestion", () => {
    const question = {id:1}

    const expectedAction = {
      type: "SET_CURRENT_QUESTION",
      payload: {id:1}
    }

    expect(setCurrentQuestion(question)).toEqual(expectedAction)
  })
})

describe("clearCurrentQuestion", () => {
  it("should return an action to reset currentState back to initial state", () => {
    const expectedAction = {
      type: "SET_CURRENT_QUESTION",
      payload: {}
    }

    expect(clearCurrentQuestion()).toEqual(expectedAction)
  })
})
