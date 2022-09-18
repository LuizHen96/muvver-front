<template>
  <div>
    <h1>Home</h1>
    <h2>Home Bold</h2>
    <h3>Home Semi-Bold</h3>
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
  h1{
    font-family: "Titillium";
    font-size: 20px;
  }
  h2{
    font-family: "Titillium-Bold";
    font-size: 20px;
  }
  h3{
    font-family: "Titillium-SemiBold";
    font-size: 20px;
  }
</style>