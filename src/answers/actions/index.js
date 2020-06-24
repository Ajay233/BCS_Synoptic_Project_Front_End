import { getWithParams } from '../../axiosRequests/requests'
import { setNotification } from '../../notifications/actions'
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

export const setCurrentAnswe = (answer) => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload: answer
  }
}

export const clearCurrentAnswe = () => {
  return {
    type: "SET_CURRENT_ANSWER",
    payload:
  }
}
