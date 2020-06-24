import { put, post } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'
import history from '../../history'

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

export const createQuiz = (data, jwt) => {
  return (dispatch) => {
    post('quiz/create', data, jwt).then((response) => {
      dispatch({
        type: "SET_CURRENT_QUIZ",
        payload: action.payload
      })
      dispatch(setNotification("Quiz created, you can now begin adding questions and answers to it", "success", true))
      history.push("/quizView")
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
        history.push("/login")
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }
}

export const updateQuiz = (data, jwt) => {
  return (dispatch) => {
    put('quiz/update', data, jwt).then((response) => {
      dispatch({
        type: "SET_CURRENT_QUIZ",
        payload: action.payload
      })
      dispatch(setNotification("Quiz updated", "success", true))
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
        history.push("/login")
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }
}
