<template>
  <div>
    <v-text-field id="newWaypoint" v-model="newWaypoint" label="Teste" variant="outlined"/>
  </div>
</template>

<script>
export default {
  name: "AutocompleteAddress",
  data() {
    return {
      newWaypoint: "",
    }
  },
  mounted() {
    const options = {
      componentRestrictions: {country: "br"},
      types: ['(cities)']
    }

    const waypointAutocomplete = new window.google.maps.places.Autocomplete(document.getElementById("newWaypoint"), options);
    waypointAutocomplete.addListener("place_changed", () =>{
      let address_components = waypointAutocomplete.getPlace().address_components;
      this.newWaypoint= address_components[0].long_name + ", " + address_components.find(x => x.types[0] == "administrative_area_level_1").short_name
    });
  },
}
</script>