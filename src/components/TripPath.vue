<template>
  <div>
    <v-btn @click="state=1"> Rotas </v-btn>
    <v-btn @click="state=2"> Mapa </v-btn>
    <TravelRoutes v-if="state==1"/>
    <TravelMap v-if="state==2"/>
  </div>
</template>

<script>
import TravelRoutes from './TravelRoutes.vue';
import TravelMap from './TravelMap.vue';
export default {
    name: "TripPath",
    data() {
      return {
        state: 1
      }
    },
    components: { TravelRoutes, TravelMap }
}
</script>