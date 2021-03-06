import { getWithParams, post, put } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'
import history from '../../history'

export const getAnswers = (param, jwt) => {
  return (dispatch) => {
    return getWithParams('answer/findByQuestionId', param, jwt).then((response) => {
      if(response.status === 204){
        dispatch({
          type: "SET_ANSWER_LIST",
          payload: []
        })
        dispatch(setNotification("There are currently no answers for this quiz", "success", true))
      } else {
        dispatch({
          type: "SET_ANSWER_LIST",
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

export const createAnswers = (data, jwt) => {
  return (dispatch) => {
    return post('answer/create', data, jwt).then((response) => {
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
    return put('answer/update', data, jwt).then((response) => {
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

export const setCurrentAnswer = (answer) => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload: answer
  }
}

export const clearCurrentAnswer = () => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload: {}
  }
}
