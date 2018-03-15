import axios from 'axios'

export class HttpService {
  static get (url, params) {
    return axios.get(url, { params: params })
  }
}
