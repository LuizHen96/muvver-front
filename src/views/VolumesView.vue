<template>

  <div class="main">
    <h2>Todos os volumes cadastrados</h2>
    <div v-for="(user, key) in getUsers" :key="key" >
      <div v-for="(travel, key2) in getTravels" :key="key2" class="volume">
        <h2><b>Usuario:</b> {{user.name}}</h2>
        <p><b>Origem:</b> {{travel.origin}} Destino: {{travel.destination}}</p>
        <p><b>Data de partida: </b>{{formattedDate(travel.departure_date)}}</p>
        <p><b>Data de Chegada:</b> {{formattedDate(travel.arrive_date)}}</p>
        <p v-if="!!travel.transport_volume"><b>Volume máximo de transporte: </b> {{travel.transport_volume}}</p>
        <p v-if="!!travel.transport_weight"><b>Peso máximo de transporte: </b>{{travel.transport_weight}}</p>
        <p><b>Preço mínimo:</b> R${{travel.minimum_price}},00</p>
      </div>
      <br>
    </div>  
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment'
export default {
  name: "VolumesView",

  methods:{
    ...mapActions(["fetchUsers", "fetchTravels"]),
    formattedDate(date) {
      return moment(date).format("DD/MM/YYYY")
    },
  },
  computed: {
    ...mapGetters(["getUsers", "getTravels"])
  },
  created() {
    this.fetchUsers();
    this.fetchTravels();
  },

}
</script>

<style scoped>
  .volume{
    padding: 15px;
    background: transparent linear-gradient(249deg, #353740 0%, #222222 100%) 0% 0% no-repeat padding-box;
    color: #ffffff;
    box-shadow: 0px 3px 6px #22222229;
    border-radius: 3px;
    font-family: "Titillium";
  }
</style>