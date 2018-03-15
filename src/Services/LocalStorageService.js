export class LocalStorageService {
  static get (itemName) {
    let item = window.localStorage.getItem(itemName)
    if (typeof item && item !== '') {
      try {
        return JSON.parse(item)
      } catch (e) {
        return item
      }
    }
    return item
  }

  static save (key, value) {
    if (typeof value === 'object') { value = JSON.stringify(value) }
    window.localStorage.setItem(key, value)
  }

  static remove (key, value) {
    return localStorage.removeItem(key, value)
  }

  static clearAll () {
    return localStorage.clear()
  }
}
