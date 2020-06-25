import { post } from '../../axiosRequests/requests'
import { setNotification } from '../../notification/actions'
import history from '../../history'

export const login = (data) => {
  return (dispatch) => {
    return post('auth/login', data).then((response) => {
      dispatch({
        type:"SET_USER",
        payload: {
          id: response.data.user.id,
          username: response.data.user.username,
          permission: response.data.user.permission,
          loggedIn: true,
          jwt: response.data.jwt
        }
      })
      dispatch(setNotification("Logged in - Welcome back", "success", true))
      history.push("/")
    }).catch((error) => {
      dispatch(setNotification(error.response.data, "error", true))
    })
  }
}

export const logOut = () => {
  return {
    type: "RESET_APP"
  }
}
