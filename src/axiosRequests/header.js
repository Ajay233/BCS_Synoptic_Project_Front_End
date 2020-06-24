import axios from 'axios'

export const setHeader = (token) => {
  if(token != null){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common["Authorization"]
  }
}
