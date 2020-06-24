import { getWithParams, post, put } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'
import history from '../../history'

export const getAnswers = (param, jwt) => {
  return (dispatch) => {
    getWithParams('answer/findByQuestionId', param, jwt).then((response) => {
      dispatch({
        type: "SET_ANSWER_LIST",
        payload: response.data
      })
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

export const createAnswers = (data, jwt) => {
  return (dispatch) => {
    post('answer/create', data, jwt).then((response) => {
      dispatch({
        type: "ADD_ANSWER",
        payload: response.data[0]
      })
      dispatch(setNotification("Answer created", "success", true))
      history.push("/questionView")
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

export const updateAnswers = (data, jwt) => {
  return (dispatch) => {
    put('answer/update', data, jwt).then((response) => {
      dispatch({
        type: "UPDATE_ANSWER",
        payload: response.data[0]
      })
      dispatch(setNotification("Answer updated", "success", true))
      history.push("/questionView")
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

export const deleteAnswer = (answer) => {
  return {
    type: "DELETE_ANSWER",
    payload: answer
  }
}

export const setCurrentAnswe = (answer) => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload: answer
  }
}

export const clearCurrentAnswe = () => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload: {}
  }
}
