<template>
  <div>
    <v-card>
      <v-btn flat icon="mdi-close" @click="closeDialog()"/>
      <h3>Ponto intermediário</h3>
      <span>Insira os pontos intermediários na sequência exata em que você passará por eles</span>
      <v-text-field id="newWaypoint" v-model="newWaypoint" label="Nome da Cidade" variant="outlined"/>
      <span>Usuários que viajam de {{origin}} para {{destination}} também passam por:</span>
      <v-row v-for="( waypoint, key ) in waypoints" :key="key">
        <v-col>
          <v-icon>mdi-map-marker</v-icon>
        </v-col>
        <v-col>
        {{waypoint}}
        </v-col>
      </v-row>
      <v-btn color="success" @click="submitWaypoint" :disabled="!input"> Avançar</v-btn>
    </v-card> 
  </div>
</template>

<script>
export default {
    name: "TravelWaypoint",
    data() {
        return {
          newWaypoint: "",
          waypoints: ["Rio Brilhante -MS", "Maracaju - MS"]
        };
    },
    methods: {
      submitWaypoint() {
          this.$store.state.travels.travel.waypoints.push( {
              location: this.newWaypoint,
          } );
          this.$emit("onCloseDialog")
      },
      closeDialog() {
        this.$emit("onCloseDialog")
      }
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
        haveSuggestion(){
            if (this.origin != "" && this.destination != "")
                return true;
            return false;
        },
        origin(){
          return this.$store.state.travels.travel.origin;
        },
        destination(){
          return this.$store.state.travels.travel.destination;
        },
        input(){
          return !!this.newWaypoint
        }
    },
}
</script>