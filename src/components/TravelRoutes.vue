<template>
  <div>
    <span> Selecione a data e rota da sua viagem</span>
    <v-container>
      <v-row>
        <v-col>
          <Datepicker v-if="showPickerDeparture" :inline="true" v-model="departureDate" modelType="dd/MM/yyyy" format="dd/MM/yyyy" :enableTimePicker="false" />
          <v-text-field v-model="departureDate" @focus="showPickerDeparture=true" @blur="showPickerDeparture=false" label="Data de Partida" variant="outlined" />
        </v-col>
        <v-col>
          <Datepicker v-if="showPickerArrive" :inline="true" v-model="arriveDate" modelType="dd/MM/yyyy" format="dd/MM/yyyy" :enableTimePicker="false" />
          <v-text-field v-model="arriveDate" @focus="showPickerArrive=true" @blur="showPickerArrive=false" label="Data de Chegada" variant="outlined" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="autoCompleteOrigin" v-model="origin" label="Cidade de Origem" variant="outlined" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="autoCompleteDestination" v-model="destination" label="Cidade de Destino" variant="outlined" />
        </v-col>
      </v-row>
      <v-row v-for="(waypoint, key) in waypoints" :key="key">
        <v-col>
          <v-icon>mdi-map-marker</v-icon>
        </v-col>
        <v-col>
          {{waypoint}}
        </v-col>
        <v-col>
          <v-btn flat icon="mdi-close"/>
        </v-col>
      </v-row>
      <TravelWaypoint/>
    </v-container>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TravelWaypoint from './TravelWaypoint.vue';
export default {
  name: "TravelRoutes",
  data() {
    return {
      departureDate: "",
      arriveDate: "",
      origin: "",
      destination: "",
      showPickerDeparture: false,
      showPickerArrive: false,
      waypoints: ["Nova Alvorada do Sul", "Sidrolândia"],
      userLatitude: "",
      userLongetude: ""
    }
  },
  mounted() {

    new window.google.maps.places.Autocomplete(document.getElementById("autoCompleteOrigin"), {
      componentRestrictions: {country: "br"},
      types: ['(cities)']
    });
    new window.google.maps.places.Autocomplete(document.getElementById("autoCompleteDestination"), {
      componentRestrictions: {country: "br"},
      types: ['(cities)']
    });

  }, 
  components:{
    Datepicker,
    TravelWaypoint
}
}
</script>
