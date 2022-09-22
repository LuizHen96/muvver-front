<template>
  <div class="main">

    <div class="header">
      <v-toolbar color="transparent">
        <v-btn icon v-if="state == 1" @click="backHome()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn icon v-if="state != 1" @click="state--">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer/>
        <v-toolbar-title class="title">Viajante</v-toolbar-title>
        <v-spacer/>
        <v-btn @click="backHome()" flat v-if="state != 1">
          Cancelar
        </v-btn>
      </v-toolbar>
      <div class="label">
        <h2>{{label[ state-1 ]}}</h2>
      </div>
    </div>
    <RadioVehicle v-on:onNextPage="state++" v-show="state == 1"/>
    <TripPath v-on:onNextPage="state++" v-show="state== 2"/>
    <RadioVolume v-on:onNextPage="state++" v-show="state==3"/>
    <RadioWeight v-on:onNextPage="state++" v-show="state==4"/>
    <DeliveryPrice v-on:onNextPage="createTravel()" v-show="state==5"/>
  </div>
</template>

<script>
import RadioVehicle from '@/components/RadioVehicle.vue';
import TripPath from '@/components/TripPath.vue';
import RadioVolume from '@/components/RadioVolume.vue';
import RadioWeight from '@/components/RadioWeight.vue';
import DeliveryPrice from '@/components/DeliveryPrice.vue';
import { mapActions } from 'vuex';

export default {
    name: "TravellerView",
    data() {
        return {
           state: 1,
           label: [
             "Qual será o meio de transporte da sua viagem?",
             "Qual o trajeto da sua viagem?",
             "O volume que você pode deslocar tem tamanho similar a que?",
             "Qual o peso do volume?",
             "Definir preço mínimo do deslocamento?"
            ],
        };
    },
    methods: {
      ...mapActions( [ 'addTravel' ] ),
      createTravel() {
        this.addTravel();
        this.$router.push({ name: 'criado' })
      },
      backHome(){
        this.$router.push({ name: 'home' })
      }
    },
    components: { RadioVehicle, TripPath, RadioVolume, RadioWeight, DeliveryPrice }
}
</script>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .header{
    background: transparent linear-gradient(249deg, #353740 0%, #222222 100%) 0% 0% no-repeat padding-box;
    color: #ffffff;
    font-family: "Titillium";
  }
  .label{
    margin: 20px;
    font-size: 1.2vw;
    text-align: center;
  }
  .title{
    font-size: 30px;
    text-align: center;
  }
</style>