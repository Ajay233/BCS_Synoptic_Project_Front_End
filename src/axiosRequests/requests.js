import axios from 'axios'
import { setHeader } from './header'

export const get = (endpoint, token=null) => {
  setHeader(token);
  return axios.get(`http://localhost:8080/${endpoint}`)
}

export const getWithParams = (endpoint, customParams, token=null) => {
  setHeader(token);
  return axios.get(`http://localhost:8080/${endpoint}`, { params: customParams })
}

export const post = (endpoint, data, token=null) => {
  setHeader(token);
  return axios.post(`http://localhost:8080/${endpoint}`, data)
}

export const postWithParams = (endpoint, customParams, token=null) => {
  setHeader(token);
  return axios.post(`http://localhost:8080/${endpoint}`, null, { params: customParams })
}

export const put = (endpoint, data, token=null) => {
  setHeader(token);
  return axios.put(`http://localhost:8080/${endpoint}`, data)
}

export const del = (endpoint, data, token=null) => {
  setHeader(token);
  return axios.delete(`http://localhost:8080/${endpoint}`, data)
}
