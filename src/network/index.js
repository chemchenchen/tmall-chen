import axios from 'axios'
import Vue from 'vue'

Vue.use(axios)

export function require(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3'
  })

  instance.interceptors.response.use(data => {
    const res = data.data.data
    
    return res
  })
  return instance(config)
}