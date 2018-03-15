import { LocalStorageService as LocalStore } from '../../Services/LocalStorageService'

export const getDataStored = ({state, commit}) => {
  const data = {
    results: LocalStore.get('results'),
    current: LocalStore.get('current'),
    total: LocalStore.get('total')
  }
  const day = 24 * 3600
  const currentTime = parseInt(new Date().getTime() / 1000)

  if (currentTime - LocalStore.get('total') <= day || data.results === null) {
    return true
  } else {
    commit('setResponse', data)
    return false
  }
}
