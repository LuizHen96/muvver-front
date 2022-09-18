<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style>
  @font-face{
    font-family: "Titillium";
    src: local("Titilium"),
     url(./assets/fonts/TitilliumWeb-Regular.ttf) format("truetype");
  }
  @font-face{
    font-family: "Titillium-Bold";
    src: local("Titilium-Bold"),
     url(./assets/fonts/TitilliumWeb-Bold.ttf) format("truetype");
  }
  @font-face{
    font-family: "Titillium-SemiBold";
    src: local("Titilium-SemiBold"),
     url(./assets/fonts/TitilliumWeb-SemiBold.ttf) format("truetype");
  }
</style>

