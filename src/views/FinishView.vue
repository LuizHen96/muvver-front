<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col>
          <v-img src="@/assets/images/send.svg" class="icon" alt="Imagem de um avião de papel" width="200"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h1>Viagem Criada</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h3>Vamos ver os volumes já disponíveis para sua viagem.</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p>Ao prosseguir, você declara para efeitos legais, administrativos, júridicos e demias aplicáveis, a veracidade de todas as informaões prestadas antes, durante e após qualquer uma das etapas do app</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="success" @click="goViewVolumes" block>Visualizar volumes</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "FinishView",
  methods: {
    goViewVolumes(){
      this.$router.push({ name: 'volumes' })
    }
  },
}
</script>

<style scoped>
  .main{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    text-align: center;
    padding: 80px;
  }
  .icon{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
  }
  .main h1{
    margin: 10px;
  }
  .main h3{
    margin: 10px;
  }
  .main p{
    margin: 10px;
  }
</style>