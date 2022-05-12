<template>
  <div>
    <HomePage />
    <div class="align-center">
    <v-btn
      @click="goToSelection"
      depressed
      color="primary"
    >{{$t('button_proceed')}}
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
      this.$router.push({name: 'Content'});
    }
  }
};
</script>
<style scoped>
.align-center {
  text-align: center;
}
</style>
