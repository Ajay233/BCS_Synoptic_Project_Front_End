export const allQuestionsSmaller = (state, question) => {
  return state.every(function(element){
    return element.questionNumber < question.questionNumber
  })
}

export const allAnswersSmaller = (state, answer) => {
  return state.every(function(element){
    return element.answerIndex < answer.answerIndex
  })
}

export const insertQuestion = (state, question) => {
  console.log(allQuestionsSmaller(state, question))
  if(state.length === 0 || allQuestionsSmaller(state, question)){
    return [...state, question]
  } else {
    let newState = state.slice()
    for(let i = 0; i < state.length; i++){
      if(state[i].questionNumber > question.questionNumber){
        newState.splice(i, 0, question)
        break;
      }
    }
    return newState
  }
}

export const insertAnswer = (state, answer) => {
  if(state.length === 0 || allAnswersSmaller(state, answer)){
    return [...state, answer]
  } else {
    console.log("using insert answer")
    let newState = state.slice()
    for(let i = 0; i < state.length; i++){
      if(state[i].answerIndex > answer.answerIndex){
        newState.splice(i, 0, answer)
        break;
      }
    }
    return newState
  }
}

export const sortUpdatedQuestion = (state, question) => {
  if(state.length < 2){
    return state.map(element => question)
  } else {
    let filteredState = state.filter(elem => elem.id !== question.id)
    console.log(filteredState)
    return insertQuestion(filteredState, question)
  }
}

export const sortUpdatedAnswer = (state, answer) => {
  if(state.length < 2){
    return state.map(element => answer)
  } else {
    let filteredState = state.filter(elem => elem.id !== answer.id)
    return insertAnswer(filteredState, answer)
  }
}
