import {require} from './index'

export function getHomeDate() {
  return require({
    url: '/home/multidata'
  })
}