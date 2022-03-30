export const state = () => ({
  darkMode: false
});
export const mutations = {
  SET_DARK_MODE(state, payload) {
    state.darkMode = payload
  }
};
export const actions = {
  setDarkMode({commit}, payload) {
    commit('SET_DARK_MODE', payload)

  }
};
