<template>
  <div>
    <v-img src="@/assets/images/send.svg" class="icon" alt="Imagem de um avião de papel" width="200"/>
    <h1>Viagem Criada</h1>
    <h3>Vamos ver os volumes já disponíveis para sua viagem.</h3>
    <p>Ao prosseguir, você declara para efeitos legais, administrativos, júridicos e demias aplicáveis, a veracidade de todas as informaões prestadas antes, durante e após qualquer uma das etapas do app</p>
    <v-btn color="success" @click="goViewVolumes">Visualizar volumes</v-btn>
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