<template>
  <div>
    <v-card class="card">
      <v-container>
        <v-row class="toolbar" no-gutters>
          <v-col>
            <v-btn flat color="transparent"  @click="closeDialog()">
              <v-icon dark color="white">
                mdi-close
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <br>
        <h3>Ponto intermediário</h3>
        <span>Insira os pontos intermediários na sequência exata em que você passará por eles</span>
        <v-text-field id="newWaypoint" v-model="newWaypoint" label="Nome da Cidade" variant="outlined"/>
        <div v-if="haveSuggestion">
          <span>Usuários que viajam de {{getCurrentTravel.origin}} para {{getCurrentTravel.destination}} também passam por:</span>
          <v-row v-for="( waypoint, key ) in getSuggestions" :key="key">
            <v-col cols = 1>
              <v-icon>mdi-map-marker</v-icon>
            </v-col>
            <v-col>
            {{waypoint}}
            </v-col>
          </v-row>
        </div>
        <br>
        <v-btn color="success" @click="submitWaypoint" :disabled="!input"> Avançar</v-btn>
      </v-container>
    </v-card> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "TravelWaypoint",
    data() {
        return {
          newWaypoint: "",
        };
    },
    created(){
      let origin = this.getCurrentTravel.origin;
      let destination = this.getCurrentTravel.destination;
      this.fetchSuggestions({origin, destination});
    },
    mounted() {
        const options = {
            componentRestrictions: { country: "br" },
            types: ["(cities)"]
        };
        const waypointAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("newWaypoint"), options);
        waypointAutocomplete.addListener( "place_changed", () => {
            let address_components = waypointAutocomplete.getPlace().address_components;
            this.newWaypoint = address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name;
        });
    },
    computed: {
      ...mapGetters(['getSuggestions', 'getCurrentTravel']),
      input(){
        return !!this.newWaypoint
      },
      haveSuggestion(){
        return this.getSuggestions.length != 0
      }
    },
    methods: {
      ...mapActions(['fetchSuggestions']),
      submitWaypoint() {
          this.$store.state.travels.travel.waypoints.push(this.newWaypoint);
          this.$emit("onCloseDialog")
      },
      closeDialog() {
        this.$emit("onCloseDialog")
      }
    },
}
</script>

<style scoped>
  .toolbar{
    padding: 15px;
    background: transparent linear-gradient(249deg, #353740 0%, #222222 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #22222229;
    border-radius: 3px;
    font-family: "Titillium";
  }
  .card{
    width: 100vw;
    height: 100vh;
  }
</style>