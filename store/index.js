export const state = () => ({
  darkMode: false,
  resetImages: true,
});
export const mutations = {
  SET_DARK_MODE(state, payload) {
    state.darkMode = payload;
  },
  SET_RESET_IMAGES(state, payload) {
    state.resetImages = payload;
  },
};
export const actions = {
  setDarkMode({ commit }, payload) {
    commit("SET_DARK_MODE", payload);
  },
  setResetImages({ commit }) {
    commit("SET_RESET_IMAGES", false);
    setTimeout(() => {
      commit("SET_RESET_IMAGES", true);
    }, 100);
  },
};
