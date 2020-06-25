import { quizResultsReducer } from './index'

describe("quizResultsReducer", () => {
  it("should set the quiResults", () => {
    const initialState = []
    const action = {
      type: "SET_QUIZ_RESULTS",
      payload: [{id:1}, {id:2}]
    }
    const expectedState = [{id:1}, {id:2}]
    const newState = quizResultsReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should remove a quiz from the quiz results", () => {
    const initialState = [{id:1}, {id:2}]
    const action = {
      type: "DELETE_QUIZ_RESULT",
      payload: {id:1}
    }
    const expectedState = [{id:2}]
    const newState = quizResultsReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = [{id:1}, {id:2}]

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = quizResultsReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
