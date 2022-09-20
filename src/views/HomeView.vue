<template>
  <div class="home">
    <v-row>
      <v-col class="toolbar" cols="2">
        <v-img src="@/assets/images/logo.svg" class="logo" alt="Logo da Muvver"/>
      </v-col>
    </v-row>

    <div class="title">
      <h2>Facilitando seus <b>envios.</b></h2>
      <h3>Entregue ou envie</h3>
    </div>
    <div class="btn sender">
      <v-container>
        <v-row>
          <v-col>
            <h2>Remetente</h2>
            <h4>Pra onde quer enviar seu objeto?</h4>
          </v-col>
          <v-col>
            <v-img src="@/assets/images/ic-box.svg" class="icon" alt="Icone de uma caixa"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="btn traveler" @click="this.$router.push({name: 'viajante'})" >
      <v-container>
        <v-row>
          <v-col>
            <h2>Viajante</h2>
            <h4>Vai viajar pra onde?</h4>
          </v-col>
          <v-col>
            <v-img src="@/assets/images/delivery-truck.svg" class="icon" alt="Icone de um Caminhão"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeView',

  components: {

  },  
});
</script>


<style scoped>
  /* ARRUMAR CSS */
  .home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
    width: 100%;
  }

  .btn{
    display: flex;
    height: 25%;
    width: 80%;
    background: transparent linear-gradient(249deg, #353740 0%, #222222 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #22222229;
    border-radius: 3px;
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
  .icon{
    width: 20%;
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