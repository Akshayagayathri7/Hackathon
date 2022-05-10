<template>
  <v-main>
    <AppHeader />
    <router-view />
    <AppFooter />
  </v-main>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>
