import { getWithParams, get } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'
import history from '../../history'

export const getQuizzesByName = (param, jwt) => {
  return (dispatch) => {
    getWithParams('quiz/findByName', param, jwt).then((response) => {
      if(response.status === 204){
        dispatch(clearQuizResults())
        dispatch(setNotification("No quizzes found by that name", "warning", true))
      } else {
        dispatch({
          type: "SET_QUIZ_RESULTS",
          payload: response.data
        })
      }
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

export const getAllQuizzes = (jwt) => {
  return (dispatch) => {
    get('quiz/getAll', jwt).then((response) => {
      if(response.status === 204){
        dispatch(clearQuizResults())
        dispatch(setNotification("No quizzes - The quiz manager is currently empty", "warning", true))
      } else {
        dispatch({
          type: "SET_QUIZ_RESULTS",
          payload: response.data
        })
      }
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

export const deleteQuiz = (quiz) => {
  return {
    type: "DELETE_QUIZ_RESULT",
    payload: quiz
  }
}

export const clearQuizResults = () => {
  return {
    type: "SET_QUIZ_RESULTS",
    payload: []
  }
}
