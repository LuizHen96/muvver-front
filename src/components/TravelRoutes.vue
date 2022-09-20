<template>
  <div>
    <span> Selecione a data e rota da sua viagem</span>
    <v-container>
      <v-row>
        <v-col>
          <Datepicker v-if="showPickerDeparture" :inline="true" v-model="$store.state.travels.travel.departure_date" modelType="dd/MM/yyyy" format="dd/MM/yyyy" :enableTimePicker="false" />
          <v-text-field v-model="$store.state.travels.travel.departure_date" @focus="showPickerDeparture=true" @blur="showPickerDeparture=false" label="Data de Partida" variant="outlined" />
        </v-col>
        <v-col>
          <Datepicker v-if="showPickerArrive" :inline="true" v-model="$store.state.travels.travel.arrive_date" modelType="dd/MM/yyyy" format="dd/MM/yyyy" :enableTimePicker="false" />
          <v-text-field v-model="$store.state.travels.travel.arrive_date" @focus="showPickerArrive=true" @blur="showPickerArrive=false" label="Data de Chegada" variant="outlined" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="origin" v-model="$store.state.travels.travel.origin" label="Cidade de Origem" variant="outlined"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="destination" v-model="$store.state.travels.travel.destination" label="Cidade de Destino" variant="outlined"/>
        </v-col>
      </v-row>
      <v-row v-for="(waypoint, key) in $store.state.travels.travel.waypoints" :key="key">
        <v-col>
          <v-icon>mdi-map-marker</v-icon>
        </v-col>
        <v-col>
          {{waypoint.location}}
        </v-col>
        <v-col>
          <v-btn flat icon="mdi-close" @click="$store.state.travels.travel.waypoints.pop(waypoint)"/>
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
      showPickerDeparture: false,
      showPickerArrive: false,
      userLatitude: "",
      userLongetude: "",
    }
  },
  mounted() {
    const options = {
      componentRestrictions: {country: "br"},
      types: ['(cities)']
    }


    const originAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("origin"), options);
    originAutocomplete.addListener("place_changed", () =>{
      let address_components = originAutocomplete.getPlace().address_components;
      this.$store.state.travels.travel.origin = address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name
    });

    const destinationAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("destination"), options);
    destinationAutocomplete.addListener("place_changed", () =>{
      let address_components = destinationAutocomplete.getPlace().address_components;
      this.$store.state.travels.travel.destination = address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name
    });

    

  }, 
  components:{
    Datepicker,
    TravelWaypoint
}
}
</script>
