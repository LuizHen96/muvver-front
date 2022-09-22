<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h3>Preço da entrega</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span>Valor Sugerido</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-slider
          v-model="minimumPrice"
          :max="300"
          :step="1"
          class="align-center"
        /> 
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
          v-model="minimumPrice"
          type="number"
          :label="minimumPriceFormat"
          style="width: 100px"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span>Clique no valor acima, para um preço mais específico</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="success" @click="nextPage( )">Avançar</v-btn>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>
export default {
  name: "DeliveryPrice.vue",
  data( ) {
    return {
      minimumPrice: 100,
    }
  },
  computed: {
    minimumPriceFormat( ){
      return "R$ " + this.minimumPrice + ",00" 
    }
  },
  methods: {
    nextPage( ){
      this.$store.state.travels.travel.minimum_price = this.minimumPrice;
      this.$emit( 'onNextPage' )
    }
  },

}
</script>