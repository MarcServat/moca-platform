import { LocalStorageService as LocalStore } from '../../Services/LocalStorageService'

export const setResLocalStorage = (state) => {
  LocalStore.save('total', state.response.total)
  LocalStore.save('current', state.response.current)
  LocalStore.save('results', state.response.results)
  LocalStore.save('time', parseInt(new Date().getTime() / 1000))
}
