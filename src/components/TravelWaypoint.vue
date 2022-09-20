<template>
  <div>
    <v-card>
      <v-btn flat icon="mdi-close" @click="dialog=false"/>
      <h3>Ponto intermediário</h3>
      <span>Insira os pontos intermediários na sequência exata em que você passará por eles</span>
      <v-text-field id="newWaypoint" v-model="newWaypoint" label="Nome da cidade" variant="outlined"/>
      <div v-if="haveSuggestion">
        <span>Usuários que viajam de {{$store.state.travels.travel.origin}} para {{$store.state.travels.travel.destination}} também passam por:</span>
        <v-row v-for="(waypoint, key) in waypoints" :key="key">
            <v-col>
              <v-icon>mdi-map-marker</v-icon>
            </v-col>
            <v-col>
            {{waypoint}}
            </v-col>
        </v-row>
      </div>
      <v-btn color="success" @click="submitWaypoint"> Confirmar</v-btn>

    </v-card>
    <!-- <v-dialog v-model="dialog" fullscreen>
      <template v-slot:activator="{ props }">
        <v-btn hide-details v-bind="props">
          <v-row>
            <v-col> 
              <v-img src="@/assets/images/add_button.svg" class="icon" alt="Icone de um Mais" width="50px"/>
            </v-col>
            <v-col>
              <h3>Adicionar ponto intermediário</h3>
              <h4>E aumente sua chance de math</h4>
            </v-col>
          </v-row>
       </v-btn>
      </template>
      <v-card>
        <v-btn flat icon="mdi-close" @click="dialog=false"/>
        <h3>Ponto intermediário</h3>
        <span>Insira os pontos intermediários na sequência exata em que você passará por eles</span>
        <v-text-field id="waypoint" v-model="newWaypoint" label="Nome da cidade" variant="outlined"/>
        <span>Usuários que viajam de {{origin}} para {{destination}} também passam por:</span>
        <v-row v-for="(waypoint, key) in waypoints" :key="key">
          <v-col>
            <v-icon>mdi-map-marker</v-icon>
          </v-col>
          <v-col>
          {{waypoint}}
          </v-col>
        </v-row>
        <v-btn color="success"> Avançar</v-btn>
      </v-card>
    </v-dialog>
     -->

  </div>
</template>

<script>
export default {
  name:"TravelWaypoint",
  data() {
    return {
      newWaypoint: "",
      dialog: false,
      waypoints: ["Rio Brilhante -MS", "Maracaju - MS"]
    }
  },
  methods: {
    submitWaypoint(){
      this.$store.state.travels.travel.waypoints.push( {
        location: this.newWaypoint,
      })
    }
  },
  mounted() {
    const options = {
      componentRestrictions: {country: "br"},
      types: ['(cities)']
    }

    const waypointAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("newWaypoint"), options);
    waypointAutocomplete.addListener("place_changed", () =>{
      let address_components = waypointAutocomplete.getPlace().address_components;
      this.newWaypoint= address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name
    });
  },
  computed: {
    haveSuggestion(){
      if(this.$store.state.travels.travel.origin != "" && this.$store.state.travels.travel.destination != "")
        return true;
      return false;
    }
  }
}
</script>