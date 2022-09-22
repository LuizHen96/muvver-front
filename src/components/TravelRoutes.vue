<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col>
          <span> Selecione a data e rota da sua viagem</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <Datepicker v-if="showPickerDeparture" :inline="true" v-model="$store.state.travels.travel.departure_date" modelType="dd/MM/yyyy" format="dd/MM/yyyy" :enableTimePicker="false" />
          <v-text-field v-model="$store.state.travels.travel.departure_date" @focus="showPickerDeparture=true" @blur="showPickerDeparture=false" :rules="dateRules" label="Data de Partida" variant="outlined" readonly/>
        </v-col>
        <v-col>
          <Datepicker v-if="showPickerArrive" :inline="true" v-model="$store.state.travels.travel.arrive_date" modelType="dd/MM/yyyy" format="dd/MM/yyyy" :enableTimePicker="false" />
          <v-text-field v-model="$store.state.travels.travel.arrive_date" @focus="showPickerArrive=true" @blur="showPickerArrive=false" :rules="dateRulesArrive" label="Data de Chegada" variant="outlined" readonly/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="origin" v-model="$store.state.travels.travel.origin" label="Cidade de Origem" :rules="cityRules" variant="outlined"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field id="destination" v-model="$store.state.travels.travel.destination" label="Cidade de Destino" :rules="cityRules" variant="outlined"/>
        </v-col>
      </v-row>
      <v-row v-for="(waypoint, key) in $store.state.travels.travel.waypoints" :key="key">
        <v-col>
          <v-icon>mdi-map-marker</v-icon>
        </v-col>
        <v-col>
          {{waypoint}}
        </v-col>
        <v-col>
          <v-btn flat icon="mdi-close" @click="removeWaypoint(waypoint)"/>
        </v-col>
      </v-row>
    <v-dialog v-model="dialog" fullscreen>
      <template v-slot:activator="{ props }">
        <v-btn hide-details v-bind="props" block flat>
          <v-row align="center">
            <v-col> 
              <v-img src="@/assets/images/add_button.svg" class="icon" alt="Icone de uma adição" width="50px"/>
            </v-col>
            <v-col>
              <h3>Adicionar ponto intermediário</h3>
              <h4>E aumente sua chance de math</h4>
            </v-col>
          </v-row>
      </v-btn>
      </template>
      <TravelWaypoint v-on:onCloseDialog="closeDialog()"/>
    </v-dialog>
    </v-container>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import TravelWaypoint from './TravelWaypoint.vue';
import moment from 'moment';
export default {
  name: "TravelRoutes",
  data() {
    return {
      showPickerDeparture: false,
      showPickerArrive: false,
      userLatitude: "",
      userLongetude: "",
      dialog: false,
      cityRules: [ v => !!v || 'É obrigatório uma cidade'],
    }
  },
  mounted() {
    const options = {
      componentRestrictions: { country: "br" },
      types: ['(cities)']
    }
    const originAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("origin"), options);
    originAutocomplete.addListener( "place_changed", () =>{
      let address_components = originAutocomplete.getPlace().address_components;
      this.$store.state.travels.travel.origin = address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name
    });
    const destinationAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("destination"), options);
    destinationAutocomplete.addListener( "place_changed", () =>{
      let address_components = destinationAutocomplete.getPlace().address_components;
      this.$store.state.travels.travel.destination = address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name
    });   
  }, 
  computed: {
    dateRules() {
      let date = moment(this.$store.state.travels.travel.departure_date, "DD/MM/YYYY")
      let now = moment( (new Date()).toLocaleDateString() , "DD/MM/YYYY")
      return [
        !now.isAfter(date)|| "A data de partida não pode ser antes de hoje"
      ]
    },
    dateRulesArrive() {
      let departureDate = moment(this.$store.state.travels.travel.departure_date, "DD/MM/YYYY")
      let arriveDate = moment(this.$store.state.travels.travel.arrive_date, "DD/MM/YYYY")
      let now = moment((new Date()).toLocaleDateString() , "DD/MM/YYYY")
      return [departureDate <= arriveDate || 'Não é possivel que a data de chegada seja antes da partida',
              !now.isAfter(arriveDate)|| "A data de chegada não pode ser antes de hoje"]
    }
  },
  methods: {
    removeWaypoint(waypoint) {
      this.$store.state.travels.travel.waypoints.pop(waypoint)
    },
    closeDialog() {
      this.dialog=false;
    }
  },
  components: {
    Datepicker,
    TravelWaypoint
}
}
</script>

<style scoped>
  .main{
    font-size: 1.3vw;
  }
</style>