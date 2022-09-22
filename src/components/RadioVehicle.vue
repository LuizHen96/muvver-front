<template>
  <div class="main">
    <v-container>
    <h3>Transporte</h3>
    <v-radio-group v-model="radioTransport">
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_car.svg" class="icon" alt="Icone de um Carro"/>
          </v-col>
          <v-col>
            <span>Carro</span>
          </v-col>
          <v-col>
            <v-radio value="Carro"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_aviao.svg" class="icon" alt="Icone de um Avião"/>
          </v-col>
          <v-col>
            <span>Avião</span>
          </v-col>
          <v-col>
            <v-radio value="Avião"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_caminhao.svg" class="icon" alt="Icone de um Caminhão"/>
          </v-col>
          <v-col>
            <span>Caminhão</span>
          </v-col>
          <v-col>
            <v-radio value="Caminhão"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_van.svg" class="icon" alt="Icone de uma Van"/>
          </v-col>
          <v-col>
            <span>Van</span>
          </v-col>
          <v-col>
            <v-radio value="Van"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_moto.svg" class="icon" alt="Icone de uma Moto"/>
          </v-col>
          <v-col>
            <span>Moto</span>
          </v-col>
          <v-col>
            <v-radio value="Moto"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_bike.svg" class="icon" alt="Icone de uma Bicicleta"/>
          </v-col>
          <v-col>
            <span>Bicicleta</span>
          </v-col>
          <v-col>
            <v-radio value="Bicicleta"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_trem.svg" class="icon" alt="Icone de um Trem"/>
          </v-col>
          <v-col>
            <span>Trem</span>
          </v-col>
          <v-col>
            <v-radio value="Trem"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_bus.svg" class="icon" alt="Icone de um Ônibus"/>
          </v-col>
          <v-col>
            <span>Ônibus</span>
          </v-col>
          <v-col>
            <v-radio value="Ônibus"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/transport/ic_barco.svg" class="icon" alt="Icone de um Barco"/>
          </v-col>
          <v-col>
            <span>Embarcação</span>
          </v-col>
          <v-col>
            <v-radio value="Barco"/>
          </v-col>
        </v-row>
    </v-radio-group>
    <v-btn color="success" @click="nextPage()">Avançar</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RadioVehicle',
  data() {
    return {
      radioTransport: "Carro",
    }
  },
  methods: {
    nextPage() {
      this.$store.state.travels.travel.vehicle = this.radioTransport;
      this.$emit( 'onNextPage' )
    }
  },
}
</script>

<style scoped>
  .icon{
    height: 50px;
    width: 50px;
  }
</style>