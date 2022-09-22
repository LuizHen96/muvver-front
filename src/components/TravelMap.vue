<template>
  <div>
    <v-row>
      <v-col>
        <div id="map"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "TravelMap",
  mounted() {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: -20.9861733, lng: -54.5066705 },
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
    })
    directionsRenderer.setMap(map) ;
    directionsService.route( {
      origin:  this.$store.state.travels.travel.origin,
      destination: this.$store.state.travels.travel.destination,
      waypoints: this.$store.state.travels.travel.waypoints,
      travelMode: window.google.maps.TravelMode.DRIVING
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + e.status));
  },
}
</script>

<style scoped>
 #map{
  width: 65vw;
  height: 80vh;
 }
</style>