<template>
  <div class="align-self-center">
    <HomePage />
    <br />
    <br />
    <br />
    <div class="align-center" style="font-family: emoji">
      <v-btn @click="goToSelection" depressed color="purple lighten-3">
        {{ $t("home_button") }}
      </v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "Home",
  components: {
    HomePage,
  },
  methods: {
    goToSelection() {
      this.$router.push({ name: "Content" });
    },
  },
};
</script>
<style scoped>
.align-center {
  text-align: center;
}
</style>
