import axios from 'axios';
const api_url = "http://localhost:3000/api/v1/users/"

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

