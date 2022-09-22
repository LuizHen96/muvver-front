<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col>
          <h3>Tamanhos</h3>
        </v-col>
      </v-row>
      <v-radio-group v-model="radioVolume">
        <v-row>
          <v-col>
            <v-img src="@/assets/images/volume/ic_email.svg" class="icon" alt="Icone de um Envelope"/>
          </v-col>
          <v-col>
            <span>Envelope</span>
            <br>
            <span> 00 x 00 cm </span>
          </v-col>
          <v-col>
            <v-radio value="Envelope"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/volume/ic_book.svg" class="icon" alt="Icone de um Livro"/>
          </v-col>
          <v-col>
            <span>Livro</span>
            <br>
            <span> 00 x 00 cm </span>
          </v-col>
          <v-col>
            <v-radio value="Livro"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/volume/ic_box.svg" class="icon" alt="Icone de uma Caixa"/>
          </v-col>
          <v-col>
            <span>Caixa de sapato</span>
            <br>
            <span> 00 x 00 cm </span>
          </v-col>
          <v-col>
            <v-radio value="Caixa de Sapato"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/volume/ic_backpack.svg" class="icon" alt="Icone de uma Mochila"/>
          </v-col>
          <v-col>
            <span>Mochila</span>
            <br>
            <span> 00 x 00 cm </span>
          </v-col>
          <v-col>
            <v-radio value="Mochila"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/volume/ic_mala.svg" class="icon" alt="Icone de uma Mala"/>
          </v-col>
          <v-col>
            <span>Envelope</span>
            <br>
            <span> 00 x 00 cm </span>
          </v-col>
          <v-col>
            <v-radio value="Mala"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/volume/ic_big_box.svg" class="icon" alt="Icone de uma Caixa Grande"/>
          </v-col>
          <v-col>
            <span>Caixa Grande</span>
            <br>
            <span> 00 x 00 cm </span>
          </v-col>
          <v-col>
            <v-radio value="Caixa Grande"/>
          </v-col>
        </v-row>
      </v-radio-group>
      <v-row>
        <v-col>
          <v-btn flat @click='nextPage("")'>Pular etapa</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="success" :disabled='!isSelected' @click="nextPage(radioVolume)">Avançar</v-btn>
        </v-col>
      </v-row>     
    </v-container>
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
    nextPage( radioVolume ) {
      this.$store.state.travels.travel.transport_volume = radioVolume;
      this.$emit( 'onNextPage' )
    }
  },
  computed: {
    isSelected() {
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