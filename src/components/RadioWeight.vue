<template>
  <div>
    <v-radio-group v-model="radioWeight">
      <v-container>
        <v-row>
          <v-col>
            <h3>Peso</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/weight/ic_balance_1.svg" class="icon" alt="Icone de uma balança"/>
          </v-col>
          <v-col>
            <span>Até 1kg</span>
          </v-col>
          <v-col cols="1">
            <v-radio value="1kg"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/weight/ic_balance_2.svg" class="icon" alt="Icone de uma balança"/>
          </v-col>
          <v-col>
            <span>Até 5kg</span>
          </v-col>
          <v-col cols="1">
            <v-radio value="5kg"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/weight/ic_balance_3.svg" class="icon" alt="Icone de uma balança"/>
          </v-col>
          <v-col>
            <span>Até 10kg</span>
          </v-col>
          <v-col cols="1">
            <v-radio value="10kg"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/weight/ic_balance_4.svg" class="icon" alt="Icone de uma balança"/>
          </v-col>
          <v-col>
            <span>Até 20kg</span>
          </v-col>
          <v-col cols="1">
            <v-radio value="20kg"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-img src="@/assets/images/weight/ic_balance_5.svg" class="icon" alt="Icone de uma balança"/>
          </v-col>
          <v-col>
            <span>Outro</span>
          </v-col>
          <v-col cols="1">
            <v-radio value="Outro"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn flat @click='nextPage(" ")' block>Pular etapa</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="success" :disabled='!isSelected' @click="nextPage(radioWeight)" block>Avançar</v-btn>
          </v-col>
        </v-row>
      </v-container> 
    </v-radio-group>  
  </div>
</template>

<script>
export default {
  name: "RadioWeight",
  data() {
    return {
      radioWeight: ""
    }
  },
  methods: {
    nextPage( radioWeight ){
      this.$store.state.travels.travel.transport_weight = radioWeight;
      this.$emit('onNextPage')
    }
  },
  computed: {
    isSelected(){
      return this.radioWeight != "" ? true : false
    }
  }
}
</script>


<style scoped>
  .main h3{
    font-size: 1.8vw;
  }
  .main span{
    font-size: 1.4vw;
  }
  .icon{
    height: 3.5vw;
    width: 3.5vw;
  }
</style>