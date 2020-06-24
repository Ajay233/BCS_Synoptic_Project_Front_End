export const setCurrentQuiz = (quiz) => {
  return {
    type: "SET_CURRENT_QUIZ",
    payload: quiz
  }
}

export const clearCurrentQuiz = () => {
  return {
    type: "SET_CURRENT_QUIZ",
    payload: {}
  }
}
