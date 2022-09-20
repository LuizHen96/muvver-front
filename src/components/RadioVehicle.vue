<template>
  <div class="main">
    <h3>Transporte</h3>
    <v-radio-group v-model="radioTransport">
      <v-container>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_car.svg" class="icon" alt="Icone de um Carro"/>
            <span>Carro</span>
            <v-spacer/>
            <v-radio value="car"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_aviao.svg" class="icon" alt="Icone de um Avião"/>
            <span>Avião</span>
            <v-spacer/>
            <v-radio value="aviao"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_caminhao.svg" class="icon" alt="Icone de um Caminhão"/>
            <span>Caminhão</span>
            <v-spacer/>
            <v-radio value="caminhao"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_van.svg" class="icon" alt="Icone de uma Van"/>
            <span>Van</span>
            <v-spacer/>
            <v-radio value="van"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_moto.svg" class="icon" alt="Icone de uma Moto"/>
            <span>Moto</span>
            <v-spacer/>
            <v-radio value="moto"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_bike.svg" class="icon" alt="Icone de uma Bicicleta"/>
            <span>Bicicleta</span>
            <v-spacer/>
            <v-radio value="bike"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_trem.svg" class="icon" alt="Icone de um Trem"/>
            <span>Trem</span>
            <v-spacer/>
            <v-radio value="trem"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_bus.svg" class="icon" alt="Icone de um Ônibus"/>
            <span>Ônibus</span>
            <v-spacer/>
            <v-radio value="bus"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/transport/ic_barco.svg" class="icon" alt="Icone de um Barco"/>
            <span>Embarcação</span>
            <v-spacer/>
            <v-radio value="barco"/>
          </v-col>
        </v-row>
      </v-container>
    </v-radio-group>
    <v-btn color="success" @click="nextPage()">Avançar</v-btn>
  </div>
</template>

<script>
export default {
  name: 'RadioVehicle',
  data() {
    return {
      radioTransport: "car",
    }
  },
  methods: {
    nextPage(){
      this.$store.state.travels.travel.vehicle = this.radioTransport;
      this.$emit('onNextPage')
    }
  },


}
</script>

<style scoped>
  .radio-option{
    display: flex;
    justify-content: space-between;
  }
  .icon{
    height: 50px;
    width: 50px;
  }
</style>