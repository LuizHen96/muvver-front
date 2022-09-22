<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-btn @click="state=1" class="btn" flat block> Rotas </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn @click="state=2" block flat> Mapa </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
        <TravelRoutes v-if="state==1"/>
        <TravelMap v-if="state==2"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn :disabled="!validInput" color="success" @click="nextPage( )">Avançar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import TravelRoutes from './TravelRoutes.vue';
import TravelMap from './TravelMap.vue';
import moment from 'moment';
export default {
    name: "TripPath",
    data( ) {
      return {
        state: 1,
      }
    },
    computed: {
      validInput( ){
        let departureDate = moment( this.$store.state.travels.travel.departure_date, "DD/MM/YYYY" )
        let arriveDate = moment( this.$store.state.travels.travel.arrive_date, "DD/MM/YYYY" )
        let now = moment( ( new Date( ) ).toLocaleDateString( ) , "DD/MM/YYYY")
        return !!this.$store.state.travels.travel.destination &&
               !!this.$store.state.travels.travel.origin  &&
               !!this.$store.state.travels.travel.departure_date  &&
               !!this.$store.state.travels.travel.arrive_date &&
               departureDate <= arriveDate &&
               !now.isAfter( departureDate )
      }
    },
    methods: {
      nextPage(){
        this.$emit( 'onNextPage' )
      },
    },
    components: { TravelRoutes, TravelMap }
}
</script>