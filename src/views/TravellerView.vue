<template>
  <div class="main">
    <div>
    <v-toolbar></v-toolbar>
    <h2>{{label[state-1]}}</h2>
    </div>
    <RadioVehicle v-if="state == 1"/>
    <TripPath v-if="state== 2"/>
    <RadioVolume v-if="state==3"/>
    <RadioWeight v-if="state==4"/>
    <DeliveryPrice v-if="state==5"/>
    <v-btn flat v-if="state== 3 || state == 4" @click="state++">Pular etapa</v-btn>
    <v-btn color="success" @click="nextPage()">Avançar</v-btn>
    
  </div>
</template>

<script>
import RadioVehicle from '@/components/RadioVehicle.vue';
import TripPath from '@/components/TripPath.vue';
import RadioVolume from '@/components/RadioVolume.vue';
import RadioWeight from '@/components/RadioWeight.vue';
import DeliveryPrice from '@/components/DeliveryPrice.vue';
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
            ]
        };
    },
    methods: {
      nextPage(){
        this.state++
        if(this.state > this.label.length){
          this.$router.push({name: 'criado'})
        }
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
    margin: 50px;
  }


</style>