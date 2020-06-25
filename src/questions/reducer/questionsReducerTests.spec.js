import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  setCurrentQuestion,
  clearCurrentQuestion
} from './index'

import { questionListReducer, currentQuestionReducer } from './index'

describe("", () => {
  it("should set the questionList", () => {
    const initialState = []
    const expectedState = [{id:1, questionNumber: 1},{id:2, questionNumber: 2}]
    const action = {
      type: "SET_QUESTION_LIST",
      payload: [{id:1, questionNumber: 1},{id:2, questionNumber: 2}]
    }

    const newState = questionListReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  it("should add a question to the questionList", () => {
    const initialState = [{id:1, questionNumber: 1}]
    const expectedState = [{id:1, questionNumber: 1},{id:2, questionNumber: 2}]
    const action = {
      type: "ADD_QUESTION",
      payload: {id:2, questionNumber: 2}
    }

    const newState = questionListReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  it("should update the questionList", () => {
    const initialState = [{id:1, questionNumber: 1},{id:2, questionNumber: 2}]
    const expectedState = [{id:2, questionNumber: 2}, {id:1, questionNumber: 3}]
    const action = {
      type: "UPDATE_QUESTION",
      payload: {id:1, questionNumber: 3}
    }

    const newState = questionListReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  it("should remove from the questionList", () => {
    const initialState = [{id:1, questionNumber: 1},{id:2, questionNumber: 2}]
    const expectedState = [{id:2, questionNumber: 2}]
    const action = {
      type: "DELETE_QUESTION",
      payload: initialState[0]
    }

    const newState = questionListReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = [{id:1}, {id:2}]

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = questionListReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})

describe("setCurrentQuestion", () => {
  it("should set the currentQuestion", () => {
    const initialState = {}
    const expectedState = {id:2, questionNumber: 2}
    const action = {
      type: "SET_CURRENT_QUESTION",
      payload: {id:2, questionNumber: 2}
    }

    const newState = currentQuestionReducer(initialState, action)

    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = {id:1}

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = currentQuestionReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
