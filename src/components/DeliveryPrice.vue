<template>
  <div>
    <h3>Preço da entrega</h3>
    <span v-if="suggestedValue">Valor Sugerido</span>
    <v-slider
      v-model="minimumPrice"
      :max="300"
      :step="1"
      class="align-center"
      @change="suggestedValue = false"
    />
    <v-text-field
          v-model="minimumPrice"
          type="number"
          :label="minimumPriceFormat"
          style="width: 100px"
          @change="suggestedValue = false"
    />
    <span>Clique no valor acima, para um preço mais específico</span>
    <v-btn color="success" @click="nextPage()">Avançar</v-btn>
  </div>
</template>

<script>
export default {
  name: "DeliveryPrice.vue",
  data() {
    return {
      minimumPrice: 100,
      suggestedValue: true
    }
  },
  computed: {
    minimumPriceFormat(){
      return "R$ " + this.minimumPrice + ",00" 
    }
  },
  methods: {
    nextPage(){
      this.$store.state.travels.travel.minimum_price = this.minimumPrice;
      this.$emit('onNextPage')
    }
  },

}
</script>