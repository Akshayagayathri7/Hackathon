<template>
  <div class="home">
    <HomePage :msg="this.$t('message')" />
    <!-- <v-btn
      depressed
      color="primary"
      @click="goToSelection"
    > -->
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
  // methods: {
  //   goToSelection() {
  //     this.router.push('/views/content');
  //   }
  // }
};
</script>
