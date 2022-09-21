<template>
  <div class="main">
    <h3>Tamanhos</h3>
    <v-radio-group v-model="radioVolume">
      <v-container>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/volume/ic_email.svg" class="icon" alt="Icone de um Envelope"/>
            <span>Envelope</span>
            <span> 00 x 00 cm </span>
            <v-spacer/>
            <v-radio value="envelope"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/volume/ic_book.svg" class="icon" alt="Icone de um Livro"/>
            <span>Livro</span>
            <span> 00 x 00 cm </span>
            <v-spacer/>
            <v-radio value="book"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/volume/ic_box.svg" class="icon" alt="Icone de uma Caixa"/>
            <span>Caixa de sapato</span>
            <span> 00 x 00 cm </span>
            <v-spacer/>
            <v-radio value="box"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/volume/ic_backpack.svg" class="icon" alt="Icone de uma Mochila"/>
            <span>Mochila</span>
            <span> 00 x 00 cm </span>
            <v-spacer/>
            <v-radio value="backpack"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/volume/ic_mala.svg" class="icon" alt="Icone de uma Mala"/>
            <span>Envelope</span>
            <span> 00 x 00 cm </span>
            <v-spacer/>
            <v-radio value="mala"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="radio-option">
            <v-img src="@/assets/images/volume/ic_big_box.svg" class="icon" alt="Icone de uma Caixa Grande"/>
            <span>Caixa Grande</span>
            <span> 00 x 00 cm </span>
            <v-spacer/>
            <v-radio value="bigBox"/>
          </v-col>
        </v-row>
      </v-container>
    </v-radio-group>
    <v-btn flat @click='nextPage("")'>Pular etapa</v-btn>
    <v-btn color="success" :disabled='!isSelected' @click="nextPage(radioVolume)">Avançar</v-btn>
  </div>
</template>

<script>
export default {
  name: "RadioVolume",
  data() {
    return {
      radioVolume: ""
    }
  },
  methods: {
    nextPage(radioVolume){
      this.$store.state.travels.travel.transport_volume = radioVolume;
      this.$emit('onNextPage')
    }
  },
  computed: {
    isSelected(){
      return this.radioVolume != "" ? true : false
    }
  }
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