import axios from 'axios';
const api_url = "http://localhost:3000/api/v1/suggestions/"

const state = {
  suggestions: []

};

const getters = {
  getSuggestions: (state) => state.suggestions,
};

const actions = {
  async fetchSuggestions({ commit }, path) {
    const response = await axios.post(api_url, path);
    commit('setSuggestions', response.data);
  },
};

const mutations = {
  setSuggestions: (state, suggestions) => (state.suggestions = suggestions)
};

export default {
    state,
    getters,
    actions,
    mutations
}

