import { HttpService } from '../../Services/HttpService'
import { url } from '../../config/constants'
import swal from 'sweetalert2'

export const getList = ({state, commit}, params) => {
  return HttpService.get(url, params).then(res => {
    commit('setResponse', {...res.data})
    commit('setResLocalStorage')
  }).catch(() => {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    })
  })
}
