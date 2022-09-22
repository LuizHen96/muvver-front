import axios from 'axios';
const api_url = "https://muvver-rails.herokuapp.com/api/v1/users/"

const state = {
  users: []

};

const getters = {
  getUsers: (state) => state.users,
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get(api_url);
    commit('setUsers', response.data);
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users)
};

export default {
    state,
    getters,
    actions,
    mutations
}

