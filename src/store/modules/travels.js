import axios from 'axios';
const api_url = "http://localhost:3000/api/v1/users/1/travels";

const state = {
  travel: {
    vehicle: "",
    departure_date: "",
    arrive_date: "",
    origin: "",
    destination: "",
    waypoints: [],
    transport_volume: "",
    transport_weight: "",
    minimum_price: 0,
  },
  travels: [ ]

};

const getters = {
  getTravels: (state) => state.travels,
  getCurrentTravel: (state) => state.travel
};

const actions = {
  async fetchTravels({ commit }) {
    const response = await axios.get(api_url);
    commit('setTravels', response.data);
  },
  async addTravel(){
    await axios.post(api_url, state.travel);
  }
};

const mutations = {
  setTravels: (state, travels) => (state.travels = travels)
};

export default {
    state,
    getters,
    actions,
    mutations
}

