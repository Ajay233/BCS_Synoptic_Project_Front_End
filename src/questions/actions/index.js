import { getWithParams } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'

export const getQuestions = (param, jwt) => {
  return (dispatch) => {
    getWithParams('question/findByQuizId', param, jwt).then((response) => {
      dispatch({
        type: "SET_QUESTION_LIST",
        payload: response.data
      })
    }).catch((error) => {
      if(error.status === 403){
        dispatch(setNotification("Session expired - please log back in to continue", "warning", true))
      } else{
        dispatch(setNotification(error.response.data, "error", true))
      }
    })
  }
}
