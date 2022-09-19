<template>
  <div>
    <h3>Preço da entrega</h3>
    <span>Valor Sugerido</span>
    <v-slider
      v-model="minimumPrice"
      :max="300"
      :step="1"
      class="align-center"
    />
    <v-text-field
          v-model="minimumPrice"
          type="number"
          :label="minimumPriceFormat"
          style="width: 100px"
    />
    <span>Clique no valor acima, para um preço mais específico</span>
  </div>
</template>

<script>
export default {
  name: "DeliveryPrice.vue",
  data() {
    return {
      minimumPrice: 0
    }
  },
  computed: {
    minimumPriceFormat(){
      return "R$ " + this.minimumPrice + ",00" 
    }
  }

}
</script>