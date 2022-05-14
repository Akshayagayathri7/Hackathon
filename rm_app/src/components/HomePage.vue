<template>
  <div class="align-self-center">
    <v-row>
      <div
        class="col-md-6 align-self-center"
        style="background-color: aliceblue"
      >
        <v-img
          :src="require('../assets/Relationship_Manager.png')"
          contain
          height="200"
        />.
      </div>
      <div class="col-md-6" style="text-align: center">
        <h1 class="font-title mb-5">{{ $t("title_tag") }}</h1>
        <div
          style="color: saddlebrown; font-size: 20px; font-family: monospace"
        >
          {{ $t("home_content") }}
        </div>
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({}),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-title {
  font-size: 24px;
  color: purple;
  font-style: italic;
  font-family: cursive;
}
.align-content {
  text-align: center;
  font-weight: 500;
  font-size: 24px;
}
.align-self-center {
  align-self: center;
}
</style>
