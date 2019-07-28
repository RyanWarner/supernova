export default class Redux {
  static set store (value) {
    this._reduxStore = value
  }

  static get state () {
    return this._reduxStore.getState()
  }

  static get dispatch () {
    return this._reduxStore.dispatch
  }
}
