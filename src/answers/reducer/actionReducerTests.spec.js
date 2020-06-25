import {
  getAnswers,
  createAnswers,
  updateAnswers,
  deleteAnswer,
  setCurrentAnswer,
  clearCurrentAnswer
} from '../actions'

import { answerListReducer, currentAnswerReducer } from './index'

import mockAxios from 'jest-mock-axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middleware = [thunk]
const mockStore = configureMockStore(middleware)


describe("answerListReducer", () => {
  it("can set the answerList state", () => {
    const initialState = []
    const expectedState = [{id:1},{id:2}]
    const action = {
      type: "SET_ANSWER_LIST",
      payload: [{id:1},{id:2}]
    }

    const newState = answerListReducer(initialState, action)

    expect(newState).toEqual(expectedState)

  })


  it("can add an answer to answerList", () => {
    const initialState = [{id:1, answerIndex: "A"}]
    const expectedState = [{id:1, answerIndex: "A"},{id:2, answerIndex: "B"}]
    const action = {
      type: "ADD_ANSWER",
      payload: {id:2, answerIndex: "B"}
    }

    const newState = answerListReducer(initialState, action)

    expect(newState).toEqual(expectedState)

  })

  it("can update an answer in the answerList", () => {
    const store = mockStore({})
    const initialState = [{id:1, answerIndex: "A"},{id:2, answerIndex: "B"}]
    const expectedState = [{id:2, answerIndex: "B"}, {id:1, answerIndex: "C"}]
    const action = {
      type: "UPDATE_ANSWER",
      payload: {id:1, answerIndex: "C"}
    }

    const newState = answerListReducer(initialState, action)

    expect(newState).toEqual(expectedState)

  })

  it("can remove an answer from the answerList", () => {
    const initialState = [{id:1, answerIndex: "A"},{id:2, answerIndex: "B"}, {id:3, answerIndex: "C"}]
    const expectedState = [{id:1, answerIndex: "A"}, {id:3, answerIndex: "C"}]
    const answer = initialState[1]
    const action = {
      type: "DELETE_ANSWER",
      payload: answer
    }

    const newState = answerListReducer(initialState, action)

    expect(newState).toEqual(expectedState)

  })
})

describe("currentAnswerReducer", () => {
  it("set currentAnswer", () => {
    const initialState = {}
    const expectedState = {id:1, answerIndex: "A"}
    const action = {
      type: "SET_CURRENT_ANSWER",
      payload: {id:1, answerIndex: "A"}
    }

    const newState = currentAnswerReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  it("clear state if passed an empty object", () => {
    const initialState = {id:1, answerIndex: "A"}
    const expectedState = {}
    const action = {
      type: "SET_CURRENT_ANSWER",
      payload: {}
    }

    const newState = currentAnswerReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })
})
