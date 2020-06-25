import { currentQuizReducer } from './index'

describe("currentQuizReducer", () => {
  it("should set the currentQuiz", () => {
    const initialState = {}
    const expectedState = {id:1}
    const action = {
      type: "SET_CURRENT_QUIZ",
      payload: {id:1}
    }

    const newState = currentQuizReducer(initialState, action)
    expect(newState).toEqual(expectedState)
  })

  it("should just return state if an action is unrecognised", () => {
    const initialState = {id:1}

    const action = {
      type: "UNRECOGNISED_ACTION"
    }

    const newState = currentQuizReducer(initialState, action)
    expect(newState).toEqual(initialState)
  })
})
