<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="1">
          <v-img src="@/assets/images/logo.svg" class="logo" alt="Logo da Muvver"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card>
            <div class="title">
              <h2>Facilitando seus <b>envios.</b></h2>
              <h3>Entregue ou envie</h3>
            </div>
         </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="btn sender">
        <v-col cols="8">
          <h2>Remetente</h2>
          <h4>Pra onde quer enviar seu objeto?</h4>
        </v-col>
        <v-col cols="2">
          <v-img src="@/assets/images/ic-box.svg" class="icon" alt="Icone de uma caixa"/>
        </v-col>
      </v-row>
      <v-row no-gutters class="btn traveler" @click="goTravelPage" >
        <v-col cols="8">
          <h2>Viajante</h2>
          <h4>Vai viajar pra onde?</h4>
        </v-col>
        <v-col cols="2">
          <v-img src="@/assets/images/delivery-truck.svg" class="icon" alt="Icone de um Caminhão"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="footer">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',
  methods: {
    goTravelPage( ){
      this.$router.push( { name: 'viajante' } )
    }
  },
});
</script>


<style scoped>
  /* TODO: ARRUMAR CSS*/
  .home{
    display: block;
  }

  .btn{
    background: transparent linear-gradient(249deg, #353740 0%, #222222 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #22222229;
    border-radius: 3px;
    padding: 20px;
  }

  .btn h2{
    color: #ffffff;
    font-family: "Titillium-SemiBold";
    font-size: 20px;
  }
  .btn h4{
    color: #ffffff;
    font-family: "Titillium";
    font-size: 14px;
  }

  h2{
    color: #222222;
    font-size: 20px;
    font-family: "Titillium";
  }
  h3{
    color: #22222252;
    font-family: "Titillium";
    font-size: 16px;
  }
</style>