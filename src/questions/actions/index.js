import { getWithParams, post, put } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'
import history from '../../history'

export const getQuestions = (param, jwt) => {
  return (dispatch) => {
    return getWithParams('question/findByQuizId', param, jwt).then((response) => {
      if(response.status === 204){
        dispatch({
          type: "SET_QUESTION_LIST",
          payload: []
        })
        dispatch(setNotification("There are currently no questions for this quiz", "success", true))
      } else {
        dispatch({
          type: "SET_QUESTION_LIST",
          payload: response.data
        })
      }
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }
}

export const createQuestion = (data, jwt) => {
  return (dispatch) => {
    return post('question/create', data, jwt).then((response) => {
      dispatch({
        type: "ADD_QUESTION",
        payload: response.data[0]
      })
      dispatch(setNotification("Question created", "success", true))
      history.push("/quizView")
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }
}

export const updateQuestion = (data, jwt) => {
  return (dispatch) => {
    return put('question/update', data, jwt).then((response) => {
      dispatch({
        type: "SET_CURRENT_QUESTION",
        payload: response.data[0]
      })
      dispatch({
        type: "UPDATE_QUESTION",
        payload: response.data[0]
      })
      dispatch(setNotification("Question updated", "success", true))
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }
}

export const deleteQuestion = (question) => {
  return {
    type: "DELETE_QUESTION",
    payload: question
  }
}

export const setCurrentQuestion = (question) => {
  return {
    type: "SET_CURRENT_QUESTION",
    payload: question
  }
}

export const clearCurrentQuestion = () => {
  return {
    type: "SET_CURRENT_QUESTION",
    payload: {}
  }
}
