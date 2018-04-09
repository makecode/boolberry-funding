export default  {
  set(key, value) {
    window.sessionStorage.setItem(`${key}`, `${value}`);
  },

  get(key) {
    return window.sessionStorage.getItem(`${key}`);
  },

  has(key) {
    return !!window.sessionStorage.getItem(`${key}`);
  }
}