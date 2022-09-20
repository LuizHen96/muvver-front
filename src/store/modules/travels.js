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
  }

};

const getters = {

};

const actions = {
  async fetchTravel({ commit }) {
    const response = await axios.get(api_url);
    commit('setTravel', response.data);
  },
  async addTravel(){
    const response = await axios.post(api_url, state.travel);
    console.log(response.data)
  }

};

const mutations = {
  setTravel: (state, travel) => (state.travel = travel)

};

export default {
    state,
    getters,
    actions,
    mutations
}

