<template>
  <div>
    <v-dialog v-model="dialog" fullscreen>
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
        <v-text-field id="autoComplete" v-model="newWaypoint" label="Nome da cidade" variant="outlined" />
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
    


  </div>
</template>

<script>
export default {
  name:"TravelWaypoint",
  data() {
    return {
      origin: "Campo Grande - MS",
      destination: "Dourados-MS",
      newWaypoint: "",
      dialog: false,
      waypoints: ["Rio Brilhante -MS", "Maracaju - MS"]
    }
  },
  mounted() {
    new window.google.maps.places.Autocomplete(document.getElementById("autoComplete"), {
      componentRestrictions: {country: "br"},
      types: ['(cities)']
    });
  },
}
</script>