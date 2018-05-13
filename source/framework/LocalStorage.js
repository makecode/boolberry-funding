export default {
  set(key, value) {
    window.localStorage.setItem(`${key}`, `${value}`);
  },

  get(key) {
    return window.localStorage.getItem(`${key}`);
  },

  has(key) {
    return !!window.localStorage.getItem(`${key}`);
  },

  clear(key) {
    window.localStorage.removeItem(`${key}`);
  },
}